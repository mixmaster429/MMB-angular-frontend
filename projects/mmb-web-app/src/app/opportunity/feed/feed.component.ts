// Core Components
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// 3rd Party Libraries
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Models
import { Opportunity } from '../types/opportunity.model';
import { ToastrService } from 'ngx-toastr';

// Services
import { OpportunityService } from '../opportunity.service';

// Components
import { ModalCreateNewQuestionComponent } from '../modal-create-new-question/modal-create-new-question.component';

// Shared
import { GLOBAL_SETTINGS } from '../../shared/types/global-setting.const';

@Component({
  selector: 'mmb-web-app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  activeTab: number = 1;
  isLoading = false;
  requests: Opportunity[] = [];
  searchString: string;
  opportunityType: string;
  totalCount: number;
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  nextItems$: Observable<Opportunity[]>;

  /**
   * Constructor
   */
  constructor(private opportunityService: OpportunityService,
    private modalService: NgbModal, private toastr: ToastrService,
    private router: Router) {
    this.isLoading = true;
  }

  /**
   * Life Cycle hooks
   */
  ngOnInit() {
    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      this.isLoading = true;
      this.nextItems$ = this.opportunityService.getRequests(this.offset.value, this.limit.value, this.searchString, this.opportunityType);
      this.nextItems$.subscribe((response: any) => {
        this.requests.push(...response.results);
        this.totalCount = response.count;
        this.isLoading = false;
      });
    });
  }

  /**
   * Create new question modal
   */
  onAddNewQuestion() {
    const modalRef = this.modalService.open(ModalCreateNewQuestionComponent, { centered: true });
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.requests = [];
      this.offset.next(0);
    })
  }

  /**
   * Scroll event from infinite scroll api
   */
  onScroll() {
    // Trigger next set of data load
    this.offset.next(this.offset.value + this.limit.value);
  }

  /**
   * Post a new comment
   * @param comment added comment
   * @param request request
   */
  onCommentAdded(comment: string, request: Opportunity) {
    this.opportunityService.onCommentAdded(comment, request);
  }

  /**
   * Added new reaction
   * @param ev 
   */
  onReactionUpdated(ev, selectedRequest: Opportunity) {
    this.opportunityService.onReactionUpdated(ev, selectedRequest);
  }

  /**
   * Upvote clicked
   * @param ev event
   */
  onUpvoteClicked(vote: boolean, request: Opportunity) {
    // remove vote
    if (request && request.voted && request.voted.vote === 1) {
      this.opportunityService.removeVote(request).subscribe((response) => {
        request.votes_total -= 1;
        request.voted = undefined;
      })
      return;
    } else if (request && request.voted && request.voted.vote === -1) {
      // User is updating vote from downvote to upvote
      this.opportunityService.updateVote(request, 1, request.voted.uuid).subscribe((response: any) => {
        request.votes_total += 2;
        request.voted = {
          vote: 1,
          uuid: response.uuid
        };
      })
      return;
    }

    // add upvote
    this.opportunityService.postNewVote(request, 1).subscribe((response: any) => {
      request.votes_total += 1;
      request.voted = {
        vote: 1,
        uuid: response.uuid
      };
    })
  }

  /**
   * Upvote clicked
   * @param ev event
   */
  onDownvoteClicked(vote: boolean, request: Opportunity) {
    if (request && request.voted && request.voted.vote === -1) {
      // remove vote
      this.opportunityService.removeVote(request).subscribe((response) => {
        request.votes_total += 1;
        request.voted = undefined;
      })
      return;
    } else if (request && request.voted && request.voted.vote === 1) {
      // User is updating vote from upvote to downvote
      this.opportunityService.updateVote(request, -1, request.voted.uuid).subscribe((response: any) => {
        request.votes_total -= 2;
        request.voted = {
          vote: -1,
          uuid: response.uuid
        };
      })
      return;
    }

    // add downvote
    this.opportunityService.postNewVote(request, -1).subscribe((response: any) => {
      request.votes_total -= 1;
      request.voted = {
        vote: -1,
        uuid: response.uuid
      };
    })
  }

  /**
   * Search updated for opportunity listing
   */
  onSearchUpdated() {
    this.getOpportunities();
  }

  /**
   * On Filter Click
   * @param event event
   */
  onFilterClick(event: any): void {
    this.offset.next(0);
    this.requests = null;
    this.opportunityType = event.value;
    this.getOpportunities();
  }

  /**
   * Opportunity Request
   */
  getOpportunities(): void {
    this.isLoading = true;
    this.opportunityService.getRequests(this.offset.value, this.limit.value, this.searchString, this.opportunityType).subscribe(response => {
      this.isLoading = false;
      this.totalCount = response.count;
      this.requests = response.results;
    });
  }

  /**
   * Bookmark the opportunity
   * @param request opportunity
   */
  onBookmark(request: Opportunity) {
    this.opportunityService.addToFavorites(request).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      request.saved = response;
    });
  }

  /**
   * Remove from bookmark
   * @param request opportunity
   */
  onRemoveBookmark(request: Opportunity) {
    const uuid = request.saved.uuid;
    this.opportunityService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      request.saved = false;
    });
  }

  /**
   * Redirect to details page
   * @param string slug
   */
  redirectToDetails(slug: string): void {
    this.router.navigateByUrl(`opportunity/${slug}`);
  }

  /**
   * Express interest
   */
  onExpressInterest(request: Opportunity) {
    this.opportunityService.expressInterest(request).subscribe((response) => {
      this.toastr.success('Expressed interested', 'Success');
      request.interested = <any>response;
      this.redirectToDetails(request.slug);
    });
  }
}

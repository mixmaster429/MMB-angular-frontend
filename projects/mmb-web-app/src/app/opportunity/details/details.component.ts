import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { OpportunityService } from '../opportunity.service';
import { RequestDetails } from '../../forum/types/request-details.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Opportunity } from '../types/opportunity.model';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../profile/types/user.model';

@Component({
  selector: 'mmb-web-app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  slug: BehaviorSubject<any> = new BehaviorSubject<any>('');
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(6);
  details: Observable<Opportunity>;
  uuid: string;
  isLoading: boolean = true;
  user: User;
  isCommentLoading: Boolean;
  truncate = { name: 0, professionalTitle: 0 };
  comments: any;

  constructor(private opportunityService: OpportunityService,
    private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.isLoading = true;
    this.details = this.route.params.pipe(
      map(p => p),
      switchMap((data) => {
        this.slug.next(data);
        return this.opportunityService.getRequestDetails(data.slug);
      })
    );

    this.details.subscribe((data: any) => {
      this.offset.next(0);
      this.uuid = data.uuid;
      this.getComments();
    });

    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      if (this.offset.value !== 0) {
        this.isLoading = true;
        this.getComments();
      }
    });
  }

  /**
  * Load Comments
  */
  getComments() {
    this.isCommentLoading = true;
    this.opportunityService.getComments(this.uuid, this.offset.value, this.limit.value).subscribe((response: any) => {
      this.comments = response;
      this.isCommentLoading = false;
    });
  }

  /**
  * Scroll event from infinite scroll api
  */
  onScroll() {
    // Trigger next set of data load
    this.offset.next(this.offset.value + this.limit.value);
  }

  /**
   * Upvote clicked
   * @param ev event
   */
  onUpvoteClicked(vote: boolean, details: RequestDetails) {
    // remove vote
    if (details && details.voted && details.voted.vote === 1) {
      this.opportunityService.removeVote(details).subscribe((response) => {
        details.votes_total -= 1;
        details.voted = undefined;
      })
      return;
    } else if (details && details.voted && details.voted.vote === -1) {
      // User is updating vote from downvote to upvote
      this.opportunityService.updateVote(details, 1, details.voted.uuid).subscribe((response: any) => {
        details.votes_total += 2;
        details.voted = {
          vote: 1,
          uuid: response.uuid
        };
      })
      return;
    }

    // add upvote
    this.opportunityService.postNewVote(details, 1).subscribe((response: any) => {
      details.votes_total += 1;
      details.voted = {
        vote: 1,
        uuid: response.uuid
      };
    })
  }

  /**
   * Upvote clicked
   * @param ev event
   */
  onDownvoteClicked(vote: boolean, details: RequestDetails) {
    if (details && details.voted && details.voted.vote === -1) {
      // remove vote
      this.opportunityService.removeVote(details).subscribe((response) => {
        details.votes_total += 1;
        details.voted = undefined;
      })
      return;
    } else if (details && details.voted && details.voted.vote === 1) {
      // User is updating vote from upvote to downvote
      this.opportunityService.updateVote(details, -1, details.voted.uuid).subscribe((response: any) => {
        details.votes_total -= 2;
        details.voted = {
          vote: -1,
          uuid: response.uuid
        };
      })
      return;
    }

    // add downvote
    this.opportunityService.postNewVote(details, -1).subscribe((response: any) => {
      details.votes_total -= 1;
      details.voted = {
        vote: -1,
        uuid: response.uuid
      };
    })
  }

  /**
   * Post a new comment
   * @param comment added comment
   * @param request request
   */
  onCommentAdded(comment: string, request: Opportunity) {
    this.opportunityService.postNewComment(comment, request).subscribe((response: any) => {
      let user = JSON.parse(localStorage.getItem('user'));
      response.user = {
        name: `${user.first_name} ${user.last_name}`,
        professional_title: `${user.credentials.professional_title}`
      };
      this.comments.results.unshift(response);
      this.comments.count += 1;
    }, (err) => {
    });
  }

  /**
   * Added new reaction
   * @param ev 
   */
  onReactionUpdated(ev, selectedRequest: Opportunity) {
    this.opportunityService.onReactionUpdated(ev, selectedRequest);
  }

  /**
   * Sends response for the opportunity
   */
  onSendResponse(opportunity: Opportunity, response: string) {
    this.opportunityService.submitOpportunityResponse().subscribe((response: any) => {
      this.toastr.success('Submitted the response', 'Success');
      opportunity.responded = response;
    }, (err) => {
      this.toastr.error('Error in submitting the response', 'Error');
    });
  }

  /**
    * Add bookmark
    * @param {any} opportunity
    */
  onAddBookmark(opportunity) {
    this.opportunityService.addToFavorites(opportunity).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      opportunity.saved = response;
    });
  }

  /**
   * Remove bookmark
   * @param {any} opportunity
   */
  onRemoveBookmark(opportunity) {
    const uuid = opportunity.saved.uuid;
    this.opportunityService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      opportunity.saved = false;
    });
  }
}

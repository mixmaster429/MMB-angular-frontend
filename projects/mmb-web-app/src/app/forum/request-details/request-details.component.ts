import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { Observable, BehaviorSubject, combineLatest, of } from 'rxjs';
import { RequestDetails } from '../types/request-details.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap, share } from 'rxjs/operators';
import { ResponseAnswer } from '../types/helpers/response.answer.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { InteractionToolsService } from '../../shared/interaction-tools/interaction-tools.service';
import { Vote } from '../../shared/interaction-tools/types/vote.model';
import { ModalCreateNewResponseComponent } from '../modal-create-new-response/modal-create-new-response.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestFeed } from '../types/request-feed.model';
import { ModalCreateNewAnswerComponent } from '../modal-create-new-answer/modal-create-new-answer.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
  // TODO: Replace this with actual logged in user
  ownerId = 'varun.goel';
  requestId: number;
  slug: BehaviorSubject<string> = new BehaviorSubject<string>('');
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(6);
  details: Observable<RequestDetails>;
  answers: ResponseAnswer;
  value$: Observable<ResponseAnswer[]>;
  nextItems$: Observable<ResponseAnswer>;
  promoCategories = this.forumService.getPromoCategories();
  isAnswering: boolean;
  isCommentsViewOpen: boolean;
  isLoading: boolean = true;
  totalAnswers: number;
  newAnswer = {
    editorData: ''
  };

  constructor(
    private forumService: ForumService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private interactionToolsService: InteractionToolsService,
    private modalService: NgbModal,
    private toastr: ToastrService) {
    this.forumService.totalAnswers.subscribe((val) => this.totalAnswers = val);
  }

  ngOnInit() {
    this.isLoading = true;

    this.details = this.route.params.pipe(
      map(p => p.slug),
      switchMap((slug) => {
        this.slug.next(slug);
        return this.forumService.getRequestDetails(slug);
      })
    );

    this.details.subscribe((response) => {
      this.requestId = response.id;
      this.nextItems$ = this.forumService.getResponseAnswers(this.requestId, this.offset.value, this.limit.value);
      this.nextItems$.subscribe((response) => {
        this.answers = response;
        this.isLoading = false;
      }, (err) => {
        this.isLoading = false;
      });
    });

    combineLatest(this.offset).pipe(
      share()
    ).subscribe(() => {
      if (this.slug.value !== '') {
        this.nextItems$ = this.forumService.getResponseAnswers(this.requestId, this.offset.value, this.limit.value);
        this.nextItems$.subscribe((response) => {
          this.answers.results.push(...response.results);
        });
      }
    });
  }

  /**
   * Scroll event from infinite scroll api
   */
  onScroll() {
    // Trigger next set of data load
    if (this.offset.value < this.answers.results.length || this.offset.value === 0) {
      this.offset.next(this.offset.value + this.limit.value);
    }
  }

  /**
   * Submits new answer
   */
  onSubmit(id: string) {
    // if (this.newAnswer.editorData === '') {
    //   return;
    // }
    // this.forumService.postNewAnswer(id, this.newAnswer.editorData).subscribe(() => {
    //   this.newAnswer.editorData = '';
    //   // this.value$ = this.forumService.getResponseAnswers(this.slug.value, 1);
    //   // this.page.next(1);
    // });
  }

  /**
   * Upvote the request
   */
  onUpVote(details: RequestDetails) {
    // const vote: Vote = {
    //   requestId: details.id,
    //   ownerId: this.ownerId
    // };
    // this.interactionToolsService.postUpvote(vote).subscribe(() => {
    //   details.upvotes.push(vote);
    // });
  }

  /**
   * Upvote the request
   */
  onDownVote(details: RequestDetails) {
    // const vote: Vote = {
    //   requestId: details.id,
    //   ownerId: this.ownerId
    // };
    // this.interactionToolsService.postDownvote(vote).subscribe(() => {
    //   details.downvotes.push(vote);
    // });
  }

  /**
   * Create new response modal
   */
  onAddNewResponse() {
    const modalRef = this.modalService.open(ModalCreateNewResponseComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.slug = this.slug.value;
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      // response created
    })
  }

  /**
   * sanitizes the answer
   * @param v html string
   */
  transform(v: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(v);
  }

  /**
   * Upvote clicked
   * @param ev event
   */
  onUpvoteClicked(vote: boolean, details: RequestDetails) {
    this.forumService.onUpvoteClicked(vote, details);
  }

  /**
   * Upvote an answer item
   * @param vote vote
   * @param answer answer item
   */
  onAnswerUpvoteClicked(vote, answer) {
    this.forumService.onAnswerUpvoteClicked(vote, answer);
  }

  /**
   * Downvote an answer item
   * @param vote vote
   * @param answer answer item
   */
  onAnswerDownvoteClicked(vote, answer) {
    this.forumService.onAnswerDownvoteClicked(vote, answer);
  }

  /**
   * Upvote clicked
   * @param ev event
   */
  onDownvoteClicked(vote: boolean, details: RequestDetails) {
    this.forumService.onDownvoteClicked(vote, details);
  }

  /**
   * Post a new comment
   * @param comment added comment
   * @param request request
   */
  onCommentAdded(comment: string, request: RequestDetails) {
    this.forumService.onCommentAdded(comment, request);
  }

  /**
   * Post a new comment to answer
   * @param comment added comment
   * @param request request
   */
  onAnswerCommentAdded(comment: string, answer: any) {
    this.forumService.onAnswerCommentAdded(comment, answer);
  }

  /**
  * Added new reaction
  * @param ev 
  */
  onReactionUpdated(ev, selectedRequest: RequestFeed) {
    this.forumService.onReactionUpdated(ev, selectedRequest);
  }

  /**
  * Added new reaction
  * @param ev 
  */
  onAnswerReactionUpdated(ev, answer: any) {
    this.forumService.onAnswerReactionUpdated(ev, answer);
  }

  /**
   * On answer clicked - open dialog
   */
  onAnswerClicked() {
    const modalRef = this.modalService.open(ModalCreateNewAnswerComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.questionId = this.requestId;
    modalRef.componentInstance.answerSuccess.subscribe(() => {
      this.answers.results = [];
      this.toastr.success('Added answer successfully!', 'Success');
      this.answers.count++;
      this.offset.next(0);
      modalRef.dismiss();
    })
  }
}

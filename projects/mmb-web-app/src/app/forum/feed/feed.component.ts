import { Component, OnInit, Input } from '@angular/core';
import { ForumService } from '../forum.service';
import { ModalCreateNewQuestionComponent } from '../modal-create-new-question/modal-create-new-question.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestFeed } from '../types/request-feed.model';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ModalCreateNewAnswerComponent } from '../modal-create-new-answer/modal-create-new-answer.component';

@Component({
  selector: 'mmb-web-app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  isLoading = false;
  requests: RequestFeed[] = [];
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  nextItems$: Observable<RequestFeed[]>;

  constructor(
    private forumService: ForumService,
    private modalService: NgbModal,
    private toastr: ToastrService) {
    this.isLoading = true;
  }

  ngOnInit() {
    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      this.isLoading = true;
      this.nextItems$ = this.forumService.getRequests('', this.offset.value, this.limit.value);
      this.nextItems$.subscribe((response) => {
        this.requests.push(...response);
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

  getRequests() {
    this.forumService.getRequests('', this.offset.value, this.limit.value).subscribe((response) => {
      this.isLoading = false;
      this.requests = response;
    })
  }

  /**
   * Scroll event from infinite scroll api
   */
  onScroll() {
    // Trigger next set of data load
    if (this.offset.value < this.requests.length || this.offset.value === 0) {
      this.offset.next(this.offset.value + this.limit.value);
    }
  }

  /**
   * Upvote clicked
   * @param ev event
   */
  onUpvoteClicked(vote: boolean, request: RequestFeed) {
    this.forumService.onUpvoteClicked(vote, request);
  }

  /**
   * Upvote clicked
   * @param ev event
   */
  onDownvoteClicked(vote: boolean, request: RequestFeed) {
   this.forumService.onDownvoteClicked(vote, request);
  }

  /**
   * Post a new comment
   * @param comment added comment
   * @param request request
   */
  onCommentAdded(comment: string, request: RequestFeed) {
    this.forumService.onCommentAdded(comment, request);
  }

  /**
  * Added new reaction
  * @param ev 
  */
  onReactionUpdated(ev, selectedRequest: RequestFeed) {
    this.forumService.onReactionUpdated(ev, selectedRequest);
  }

  /**
   * On answer clicked - open dialog
   */
  onAnswerClicked(reqest: RequestFeed) {
    const modalRef = this.modalService.open(ModalCreateNewAnswerComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.questionId = reqest.id;
    modalRef.componentInstance.answerSuccess.subscribe((response: any) => {
      this.toastr.success('Added answer successfully!', 'Success');
      reqest.answers.push(response);
      this.offset.next(0);
      modalRef.dismiss();
    })
  }
}

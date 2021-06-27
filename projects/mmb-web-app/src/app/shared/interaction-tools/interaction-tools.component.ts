import { OpportunityService } from './../../opportunity/opportunity.service';
import { RequestDetails } from './../../forum/types/request-details.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../types/comment.model';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { REACTIONS } from './types/reaction.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-interaction-tools',
  templateUrl: './interaction-tools.component.html',
  styleUrls: ['./interaction-tools.component.scss'],
  providers: [NgbDropdownConfig]
})
export class InteractionToolsComponent implements OnInit {
  DEFAULT_COMMENTS_LIMIT = 2;
  comment: string;
  availableReactions = REACTIONS;
  @Input() reactions: number;
  @Input() comments: Comment[];
  @Input() answers: number;
  @Input() isVoted: any;
  @Input() reacted: any;
  @Input() isReactionsEnabled: boolean = false;
  @Input() isVotingEnabled: boolean = false;
  @Input() isCommentActive: boolean = false;
  @Input() isCommentMaxHeightEnabled: boolean = true;
  @Input() isAnswerEnabled: boolean;
  @Input() selectedOpportunityDetails: RequestDetails;
  @Input() interest: boolean;

  @Output() upvoteClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() downvoteClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() answerClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() reactionUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() commentAdded: EventEmitter<string> = new EventEmitter<string>();
  @Output() newCommentPosted: EventEmitter<Comment> = new EventEmitter<Comment>();

  commentsLimit: number = this.DEFAULT_COMMENTS_LIMIT;

  constructor(config: NgbDropdownConfig,
              private opportunityService: OpportunityService,
              private toastr: ToastrService) {
    config.placement = 'top-left';
    config.autoClose = true;
  }

  ngOnInit() {
  }

  /**
   * Upvote clicked
   */
  onUpvoteClicked() {
    this.upvoteClicked.emit(true);
  }

  /**
   * Downvote clicked
   */
  onDownvoteClicked() {
    this.downvoteClicked.emit(true);
  }

  /**
   * Reaction icon clicked
   */
  onReactionIconClicked(reaction) {
    this.reactionUpdated.emit(reaction);
  }

  /**
   * Answer clicked
   */
  onAnswerClicked() {
    this.answerClicked.emit();
  }

  /**
   * comment key press
   * @param ev event
   */
  onCommentKeyPress(ev: KeyboardEvent) {
    if (ev.keyCode === 13 && this.comment !== '') {
      // post the comment
      this.commentAdded.emit(this.comment);
      this.comment = '';
      return false;
    }
  }

  /**
   * get selected reaction from list of available reactions
   */
  getSelectedReaction(reaction: string) {
    return this.availableReactions.filter((item) => item.value === parseInt(reaction))[0];
  }


  /**
   * User pressed i am interested button
   */
  onExpressInterest() {
    this.opportunityService.expressInterest(this.selectedOpportunityDetails).subscribe((response: any) => {
      this.selectedOpportunityDetails.interested.interested = response;
      this.toastr.success('Expressed interest', 'Success');
    });
  }

  /**
   * Remove the interest
   */
  onRemoveInterest() {
    this.opportunityService.removeInterest(this.selectedOpportunityDetails).subscribe((response: any) => {
      this.selectedOpportunityDetails.interested.interested = null;
      this.toastr.success('Removed the interest', 'Success');
    });
  }
}

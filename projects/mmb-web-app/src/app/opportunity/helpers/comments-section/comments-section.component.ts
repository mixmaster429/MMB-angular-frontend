import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../profile/types/user.model';
import { Opportunity, Comment } from '../../types/opportunity.model';

@Component({
  selector: 'mmb-web-app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss']
})
export class CommentsSectionComponent implements OnInit {
  comment: string;

  @Input() comments: any;
  @Input() opportunity: Opportunity;
  @Input() user: User;
  @Output() commentAdded: EventEmitter<string> = new EventEmitter<string>();
  @Output() scrolled = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * comment key press
   * @param ev event
   */
  onCommentKeyPress(ev: KeyboardEvent) {
    if (ev.key === 'Enter' && this.comment !== '') {
      // post the comment
      this.commentAdded.emit(this.comment);
      this.comment = '';
      return false;
    }
  }

  /**
   * Upvote the comment
   */
  onUpvote(comment: Comment) {
    if (comment.voted) {
      // if it was already voted, remove the vote
    } else {
      // new vote
    }
  }

  onScroll() {
    this.scrolled.emit();
  }
}

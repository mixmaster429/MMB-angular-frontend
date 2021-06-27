import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../types/comment.model';

@Component({
  selector: 'mmb-web-app-comment-view-detail',
  templateUrl: './comment-view-detail.component.html',
  styleUrls: ['./comment-view-detail.component.scss']
})
export class CommentViewDetailComponent implements OnInit {
  DEFAULT_COMMENTS_LIMIT: number = 2;
  @Input() comments: Comment[];
  @Input() commentsLimit: number = this.DEFAULT_COMMENTS_LIMIT;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Show all comments
   */
  viewAllComments() {
    this.commentsLimit = this.comments.length;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../types/comment.model';

@Component({
  selector: 'mmb-web-app-comment-view-simple',
  templateUrl: './comment-view-simple.component.html',
  styleUrls: ['./comment-view-simple.component.scss']
})
export class CommentViewSimpleComponent implements OnInit {
  DEFAULT_COMMENTS_LIMIT: number = 2;
  @Input() comments: Comment[];
  @Input() commentsLimit: number = this.DEFAULT_COMMENTS_LIMIT;

  constructor() { }

  ngOnInit() {
  }

}

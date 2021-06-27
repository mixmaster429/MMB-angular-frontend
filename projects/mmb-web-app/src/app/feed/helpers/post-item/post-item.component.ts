import { Component, Input, OnInit } from '@angular/core';
import { ForumService } from '../../../forum/forum.service';
import { RequestFeed } from '../../../forum/types/request-feed.model';

@Component({
  selector: 'mmb-web-app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() feed;

  constructor(private forumService: ForumService) { }

  ngOnInit() {
  }

  /**
   * Upvote clicked for forum
   */
  onForumQuestionUpvoteClicked(vote: boolean, item: RequestFeed) {
    this.forumService.onUpvoteClicked(vote, item);
  }

  /**
   * Downvote clicked for forum
   */
  onForumQuestionDownvoteClicked(vote: boolean, item: RequestFeed) {
    this.forumService.onDownvoteClicked(vote, item);
  }

  /**
   * Reaction updated for forum
   */
  onForumQuestionReactionUpdated(forum: RequestFeed, ev) {
    this.forumService.onReactionUpdated(ev, forum);
  }

  /**
   * Post a new comment for forum
   * @param comment added comment
   * @param forum request
   */
  onForumQuestionCommentAdded(answer: RequestFeed, comment: string) {
    this.forumService.onCommentAdded(comment, answer);
  }
}

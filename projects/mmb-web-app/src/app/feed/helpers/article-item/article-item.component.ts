import { Component, Input, OnInit } from '@angular/core';
import { ForumService } from '../../../forum/forum.service';
import { RequestFeed } from '../../../forum/types/request-feed.model';

@Component({
  selector: 'mmb-web-app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() feed;

  constructor(private forumService: ForumService) { }

  ngOnInit() {
  }

  /**
   * Upvote clicked for forum
   */
  onForumAnswerUpvoteClicked(vote: boolean, item: RequestFeed) {
    this.forumService.onAnswerUpvoteClicked(vote, item);
  }

  /**
   * Downvote clicked for forum
   */
  onForumAnswerDownvoteClicked(vote: boolean, item: RequestFeed) {
    this.forumService.onAnswerDownvoteClicked(vote, item);
  }

  /**
   * Reaction updated for forum
   */
  onForumAnswerReactionUpdated(forum: RequestFeed, ev) {
    this.forumService.onAnswerReactionUpdated(ev, forum);
  }

  /**
   * Post a new comment for forum
   * @param comment added comment
   * @param forum request
   */
  onForumAnswerCommentAdded(answer: RequestFeed, comment: string) {
    this.forumService.onAnswerCommentAdded(comment, answer);
  }
}

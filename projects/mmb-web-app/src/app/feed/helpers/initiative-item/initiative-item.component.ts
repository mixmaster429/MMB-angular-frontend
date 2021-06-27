import { Component, Input, OnInit } from '@angular/core';
import { InitiativesService } from '../../../initiatives/initiatives.service';
import { Initiative } from '../../../initiatives/types/initiative.model';
import { Feed } from '../../../shared/types/feed.model';

@Component({
  selector: 'mmb-web-app-initiative-item',
  templateUrl: './initiative-item.component.html',
  styleUrls: ['./initiative-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  @Input() feed;
  constructor(private initiativeService: InitiativesService) { }

  ngOnInit() {
  }

  /**
   * Reaction updated for initiative
   */
  onInitiativeReactionUpdated(initiative: Initiative, ev) {
    this.initiativeService.onReactionUpdated(initiative, ev);
  }

  /**
   * Post a new comment for initiative
   * @param comment added comment
   * @param request request
   */
  onInitiativeCommentAdded(initiative: Initiative, comment: string) {
    this.initiativeService.onCommentAdded(initiative, comment);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { OpportunityService } from '../../../opportunity/opportunity.service';
import { Opportunity } from '../../../opportunity/types/opportunity.model';

@Component({
  selector: 'mmb-web-app-opportunity-item',
  templateUrl: './opportunity-item.component.html',
  styleUrls: ['./opportunity-item.component.scss']
})
export class OpportunityItemComponent implements OnInit {

  @Input() feed;

  constructor(private opportunityService: OpportunityService) { }

  ngOnInit() {
  }

  /**
   * Reaction updated for Opportunity
   */
  onOpportunityReactionUpdated(opportunity: Opportunity, ev) {
    this.opportunityService.onReactionUpdated(ev, opportunity);
  }

  /**
   * Post a new comment for Opportunity
   * @param comment added comment
   * @param forum request
   */
  onOpportunityCommentAdded(opportunity: Opportunity, comment: string) {
    this.opportunityService.onCommentAdded(comment, opportunity);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Opportunity } from '../../types/opportunity.model';

@Component({
  selector: 'mmb-web-app-opportunity-response-submitted-panel',
  templateUrl: './opportunity-response-submitted-panel.component.html',
  styleUrls: ['./opportunity-response-submitted-panel.component.scss']
})
export class OpportunityResponseSubmittedPanelComponent implements OnInit {
  @Input() opportunity: Opportunity;
  isEditModeActive: boolean;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Edit the previously sent response
   */
  onEdit() {
    this.isEditModeActive = !this.isEditModeActive;
  }

  /**
   * Cancel the update
   */
  onCancelUpdate() {
    this.isEditModeActive = !this.isEditModeActive;
  }

  /**
   * Update the previously sent response
   */
  onUpdate() {

  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mmb-web-app-create-opportunity-more-info-panel',
  templateUrl: './create-opportunity-more-info-panel.component.html',
  styleUrls: ['./create-opportunity-more-info-panel.component.scss']
})
export class CreateOpportunityMoreInfoPanelComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() opportunitySettings: any;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Gets count remaining
   */
  get getOpportunitySummaryCharCount() {
    return this.form.controls['summary'].value ? this.form.controls['summary'].value.length : 0;
  }

  /**
   * Gets count remaining
   */
  get getOpportunityDescriptionCharCount() {
    return this.opportunitySettings.MIN_CHAR_COUNT_DESCRIPTION -
      (this.form.controls['description'].value ? this.form.controls['description'].value.length : 0);
  }
}

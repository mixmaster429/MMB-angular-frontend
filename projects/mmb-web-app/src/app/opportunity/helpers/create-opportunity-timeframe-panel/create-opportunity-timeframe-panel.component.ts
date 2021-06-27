// Core Modules
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

// 3rd Modules
import * as moment from 'moment';

@Component({
  selector: 'mmb-web-app-create-opportunity-timeframe-panel',
  templateUrl: './create-opportunity-timeframe-panel.component.html',
  styleUrls: ['./create-opportunity-timeframe-panel.component.scss']
})
export class CreateOpportunityTimeframePanelComponent implements OnInit {
  dateFormat: string = 'YYYY-MM-DD';
  additionalDate: number = 30;
  endMinDate: any;
  endMaxDate: any;
  isEndDateDisabled: boolean = true;
  startMinDate: any = moment(new Date()).format(this.dateFormat);

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  /**
   * On date change event
   */
  onDateChange() {
    const selectedStartDate = this.form.value.startDate;
    this.form.controls.endDate.reset();
    this.endMinDate = selectedStartDate;
    this.endMaxDate = moment(selectedStartDate).add(this.additionalDate, 'days').format(this.dateFormat);
    this.isEndDateDisabled = false;
  }
}

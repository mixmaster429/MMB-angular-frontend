// Core Modules
import { Component, Input, OnInit } from '@angular/core';

// Services
import { SharedService } from '../../../shared/shared.service';

// Models
import { Opportunity } from '../../types/opportunity.model';

// Constants
import { OPPORTUNITY_CATEGORIES } from '../../types/opportunity-categories.const';
import { OPPORTUNITY_TYPES } from '../../types/opportunity-types.const';

@Component({
  selector: 'mmb-web-app-opportunity-detail-meta-info',
  templateUrl: './opportunity-detail-meta-info.component.html',
  styleUrls: ['./opportunity-detail-meta-info.component.scss']
})
export class OpportunityDetailMetaInfoComponent implements OnInit {

  @Input() opportunity: Opportunity;
  assignedClass: string;
  separatorClasses: string[] = ['primary', 'success', 'warning', 'danger', 'info'];

  /**
   * Constructor
   */
  constructor(private sharedService: SharedService) { }

  /**
   * Angular Lifecycle hooks
   */
  ngOnInit() {
  }

  /**
   * Time left
   */
  getTimeLeft(): number {
    return this.sharedService.getTimeLeft(this.opportunity.end_date);
  }

  /**
   * Maps opportunite type from number
   * @param type value
   */
  getOpportunityType(type: number) {
    return OPPORTUNITY_TYPES.filter((item) => {
      if (item.value === type.toString()) {
        return item.viewValue;
      }
    });
  }

  /**
   * Maps opportunite category from number
   * @param type value
   */
  getOpportunityCategory(type: number) {
    return OPPORTUNITY_CATEGORIES.filter((item) => {
      if (item.value === type.toString()) {
        return item.viewValue;
      }
    });
  }

  /**
   * Returns random separator class
   */
  getRandomSeparatorClass() {
    if (!this.assignedClass) {
      let randomNum = Math.floor(Math.random() * 5);
      this.assignedClass = `bg-${this.separatorClasses[randomNum]}`;
    }
    return this.assignedClass;
  }
}

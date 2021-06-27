import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../shared/types/career.model';
import { CAREER_TYPES } from '../../types/career-types.enum';
import { PRIMARY_ORG_TYPES } from '../../types/org-type-primary.enum';

@Component({
  selector: 'mmb-web-app-career-type-summary-section',
  templateUrl: './career-type-summary-section.component.html',
  styleUrls: ['./career-type-summary-section.component.scss']
})
export class CareerTypeSummarySectionComponent implements OnInit {
  @Input() career: Career;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Maps to string value
   * @param careerType
   */
  getCareerType(careerType: number) {
    return CAREER_TYPES.filter(type => {
      if (type.value === careerType.toString()) {
        return type.viewValue;
      }
    })
  }

  /**
   * Maps to string value
   * @param orgType
   */
  getOrgPrimaryType(orgType: number) {
    return PRIMARY_ORG_TYPES.filter(type => {
      if (type.value === orgType) {
        return type.viewValue;
      }
    })
  }
}

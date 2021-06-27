import { Component, Input, OnInit } from '@angular/core';
import { PRIMARY_ORG_TYPES } from '../../../careers/types/org-type-primary.enum';
import { INITIATIVE_TYPES } from '../../types/initiative-type.enum';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-type-summary-section',
  templateUrl: './experience-type-summary-section.component.html',
  styleUrls: ['./experience-type-summary-section.component.scss']
})
export class ExperienceTypeSummarySectionComponent implements OnInit {
  @Input() experience: Initiative;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Maps to string value
   * @param careerType
   */
  getExperienceType(careerType: number) {
    return INITIATIVE_TYPES.filter(type => {
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ORG_CATEGORIES } from '../../../careers/types/org-category.enum';
import { PRIMARY_ORG_TYPES } from '../../../careers/types/org-type-primary.enum';
import { Organisation } from '../../types/organisation.model';

@Component({
  selector: 'mmb-web-app-organisation-summary-panel',
  templateUrl: './organisation-summary-panel.component.html',
  styleUrls: ['./organisation-summary-panel.component.scss']
})
export class OrganisationSummaryPanelComponent implements OnInit {

  @Input() organisation: Organisation;
  @Output() follow: EventEmitter<any> = new EventEmitter();
  @Output() unfollow: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onFollow() {
    this.follow.emit();
  }

  onUnfollow() {
    this.unfollow.emit();
  }

  getOrgPrimaryType(orgType: number) {
    return PRIMARY_ORG_TYPES.filter(type => {
      if (type.value === orgType) {
        return type.viewValue;
      }
    });
  }

  getOrgCategory(orgCategory: number) {
    return ORG_CATEGORIES.filter(type => {
      if (type.value === orgCategory) {
        return type.viewValue;
      }
    });
  }

}

// Core Modules
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Opportunity } from '../../types/opportunity.model';

// Constants
import { OPPORTUNITY_TYPES } from '../../types/opportunity-types.const';
import { OPPORTUNITY_CATEGORIES } from '../../types/opportunity-categories.const';
import { OPPORTUNITY_STATUS } from '../../types/opportunity-status.const';
import { GLOBAL_SETTINGS } from '../../../shared/types/global-setting.const';

// 3rd Party Modules
import { ToastrService } from 'ngx-toastr';

// Services
import { OpportunityService } from '../../../opportunity/opportunity.service';

@Component({
  selector: 'mmb-web-app-opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.scss']
})
export class OpportunityCardComponent implements OnInit {
  @Input() request: Opportunity;
  @Output() expressInterest: EventEmitter<any> = new EventEmitter<any>();
  @Input() truncate: any = GLOBAL_SETTINGS.opportunity.truncate;

  typeClass: string = 'all'

  /**
  * Constructor
  * @param {OpportunityService}: opportunityService
  * @param {Router}: router
  * @param {ToastrService}: toastr
  */
  constructor(
    private opportunityService: OpportunityService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  /**
   * Angular Lifecycle hooks
   */
  ngOnInit() {
  }

  /**
   * Redirect To Details
   * @param {string} slug
   */
  redirectToDetails(slug: string, ev: any) {
    this.router.navigateByUrl(`opportunity/${slug}`);
  }

  /**
   * On Express Interest
   */
  onExpressInterest() {
    this.expressInterest.emit();
  }

  /**
    * Add bookmark
    * @param {any} opportunity
    */
   onAddBookmark(opportunity) {
    this.opportunityService.addToFavorites(opportunity).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      opportunity.saved = response;
    });
  }

  /**
   * Remove bookmark
   * @param {any} opportunity
   */
  onRemoveBookmark(opportunity) {
    const uuid = opportunity.saved.uuid;
    this.opportunityService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      opportunity.saved = false;
    });
  }

  /**
   * Maps opportunity category from number
   */
  get getOpportunityCategory(): string {
    const selectedOpportunityCategories: any = OPPORTUNITY_CATEGORIES.find((item) => {
      return item.value == String(this.request.opportunity_type);
    });
    return selectedOpportunityCategories.viewValue;
  }

  /**
   * Maps opportunity type from number
   */
  get getOpportunityType(): string {
    const selectedOpportunityType: any = OPPORTUNITY_TYPES.find((item) => {
      this.typeClass = item.class;
      return item.value == String(this.request.category);
    });
    return selectedOpportunityType.viewValue;
  }

  /**
   * Maps opportunity type from number
   */
  get getOpportunityStatus(): any {
    const selectedOpportunityType: any = OPPORTUNITY_STATUS.find((item) => {
      return item.id == Number(this.request.status);
    });
    return selectedOpportunityType;
  }
}

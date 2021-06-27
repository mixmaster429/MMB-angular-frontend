// Core Modules
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// 3rd Party Modules
import { ToastrService } from 'ngx-toastr';

// Services
import { OpportunityService } from '../../opportunity/opportunity.service';

// Models
import { Opportunity } from '../../opportunity/types/opportunity.model';
import { GLOBAL_SETTINGS } from '../types/global-setting.const';

@Component({
  selector: 'mmb-web-app-user-summary-info',
  templateUrl: './user-summary-info.component.html',
  styleUrls: ['./user-summary-info.component.scss']
})
export class UserSummaryInfoComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  @Input() professionalTitle: string;
  @Input() company: string;
  @Input() type: string;
  @Input() createdOnDate: Date;
  @Input() id: number;
  @Input() isUser: boolean;
  @Input() popoverSummary: string;
  @Input() userUrl: string;
  @Input() orgUrl: string;
  @Input() redirect: string;
  @Input() isSaved: boolean;
  @Input() opportunity: Opportunity;
  @Input() truncate: any = GLOBAL_SETTINGS.opportunity.truncate;
  @Output() addBookmark: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeBookmark: EventEmitter<any> = new EventEmitter<any>();

  /**
  * constructor
  * @param OpportunityService: opportunityService
  * @param ToastrService: toastr
  */
  constructor(
    private opportunityService: OpportunityService,
    private toastr: ToastrService
  ) { }

  /**
 * Life Cycle Methods
 */
  ngOnInit() {
  }

  /**
   * Add forum item to favorites
   * @param {any} event
   * @param {Opportunity} opportunity
   */
  onAddToFavorites(opportunity: Opportunity, event: any) {
    this.addBookmark.emit(opportunity);
    event.stopPropagation();
  }

  /**
   * Remove forum item from favorites
   * @param {any} event
   * @param {Opportunity} opportunity
   */
  onRemoveFromFavorites(opportunity: Opportunity, event: any) {
    this.removeBookmark.emit(opportunity);
    event.stopPropagation();
  }
}

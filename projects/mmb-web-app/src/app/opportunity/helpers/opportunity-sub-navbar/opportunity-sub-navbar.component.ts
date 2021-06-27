// Core Components
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// Enums
import { OPPORTUNITY_TYPES } from '../../types/opportunity-types.const';

@Component({
  selector: 'mmb-web-app-opportunity-sub-navbar',
  templateUrl: './opportunity-sub-navbar.component.html',
  styleUrls: ['./opportunity-sub-navbar.component.scss']
})
export class OpportunitySubNavbarComponent implements OnInit {
  activeItem: string = 'All';
  menuItems: Array<Object>
  
  @Output() onFilterChange: EventEmitter<any> = new EventEmitter<any>();
  
  /**
   * Constructor
   */
  constructor() { }

  /**
   * Lifecycle method
   */
  ngOnInit() {
    this.menuItems = OPPORTUNITY_TYPES;
  }

  /**
   * Search updated for opportunity listing
   * @param item Item
   */
  onOpportunityClick(item) {
    this.activeItem = item.viewValue;
    this.onFilterChange.emit(item);
  }

}

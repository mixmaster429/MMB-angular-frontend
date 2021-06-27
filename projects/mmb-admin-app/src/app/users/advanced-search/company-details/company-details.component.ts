import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FilterHelpersService } from '../../../shared/sidebar-filters/filter-helpers.service';

@Component({
  selector: 'mmb-admin-app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  @Input() separatorKeysCodes: number[];
  currentCompanies: string[] = [];
  companySizes: string[] = [];
  pastCompanies: string[] = [];

  constructor(private filterHelpersService: FilterHelpersService) { }

  ngOnInit() {
  }

  /**
   * Adds input to list
   * @param event event value
   * @param type type of input
   */
  add(event: MatChipInputEvent, type: string): void {
    this.filterHelpersService.addToChipList(event, this[type]);
  }

  /**
   * Removes the item
   */
  remove(value: string, type: string): void {
    this.filterHelpersService.removeFromChipList(value, this[type]);
  }
}

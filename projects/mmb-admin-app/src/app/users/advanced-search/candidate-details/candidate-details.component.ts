import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FilterHelpersService } from '../../../shared/sidebar-filters/filter-helpers.service';

@Component({
  selector: 'mmb-admin-app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {
  @Input() separatorKeysCodes: number[];
  firstNames: string[] = [];
  lastNames: string[] = [];
  postalCodes: string[] = [];
  spokenLanguages: string[] = [];
  profileLanguages: string[] = [];

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

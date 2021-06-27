import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FilterHelpersService } from '../../../shared/sidebar-filters/filter-helpers.service';

@Component({
  selector: 'mmb-admin-app-education-experience-details',
  templateUrl: './education-experience-details.component.html',
  styleUrls: ['./education-experience-details.component.scss']
})
export class EducationExperienceDetailsComponent implements OnInit {
  @Input() separatorKeysCodes: number[];
  yearsOfExperiences: string[] = [];
  fieldsOfStudy: string[] = [];
  yearsInCurrentCompany: string[] = [];
  degrees: string[] = [];
  yearsInCurrentPosition: string[] = [];
  seniorities: string[] = [];
  militaryVeterans: string[] = [];

  constructor(
    private filterHelpersService: FilterHelpersService
  ) { }

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

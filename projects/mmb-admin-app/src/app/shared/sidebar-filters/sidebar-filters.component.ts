import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FilterHelpersService } from './filter-helpers.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SCORE_OPTIONS } from '../score-options.const';
import { SKILLS_EXCELLENCE_LEVELS } from '../types/skills-excellence.enum';

@Component({
  selector: 'mmb-admin-app-sidebar-filters',
  templateUrl: './sidebar-filters.component.html',
  styleUrls: ['./sidebar-filters.component.scss']
})
export class SidebarFiltersComponent implements OnInit {
  @Input() separatorKeysCodes: number[];
  @Input() isProjectMode: boolean = false;
  @Output() filtersUpdated: EventEmitter<{}> = new EventEmitter<{}>();
  jobTitles: string[] = [];
  locations: string[] = [];
  skills: string[] = [];
  companies: string[] = [];
  employmentTypes: string[] = [];
  keywords: string[] = [];
  scores = new FormControl();
  scoreOptions = SCORE_OPTIONS;
  skillsExcellenceLevels = SKILLS_EXCELLENCE_LEVELS;
  filters: FormGroup;

  constructor(
    private filterHelpersService: FilterHelpersService,
    private formBuilder: FormBuilder
  ) {
    this.filters = this.formBuilder.group({
      excellenceLevelFilter: ['']
    });
  }

  ngOnInit() {
    this.filters.valueChanges.subscribe((changes) => {
      this.filtersUpdated.emit(changes);
    })
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

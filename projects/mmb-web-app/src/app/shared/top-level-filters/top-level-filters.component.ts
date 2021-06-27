import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, map, tap } from 'rxjs/operators';
import { Country } from '../types/country.model';
import { SharedService } from '../shared.service';
import { PrimaryFunction } from '../types/primary-function.model';
import { Filter } from '../types/filter.model';
import { BehaviorSubject } from 'rxjs';
import { CAREER_TYPES } from './../../careers/types/career-types.enum';
import { EVENT_TYPES } from '../../events/types/event-types.enum';
import { INITIATIVE_TYPES } from '../../initiatives/types/initiative-type.enum';

@Component({
  selector: 'mmb-web-app-top-level-filters',
  templateUrl: './top-level-filters.component.html',
  styleUrls: ['./top-level-filters.component.scss']
})
export class TopLevelFiltersComponent implements OnInit {
  @Input() entityType: string = 'generic';
  filtersForm: FormGroup;
  countries: Country[];
  functions: PrimaryFunction[];
  industries: PrimaryFunction[];
  careerTypes = CAREER_TYPES;
  eventTypes = EVENT_TYPES;
  initiativeTypes = INITIATIVE_TYPES;

  @Input()
  set filters(filter: BehaviorSubject<Filter>) {
    this._initFilter(filter.value);
  }
  @Output() filtersUpdated: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this._initFilter();
  }

  ngOnInit() {
    // load all countries
    this.sharedService.getCountries('', 500).subscribe((countries) => {
      this.countries = countries;
    });

    // load all primary functions
    this.sharedService.getPrimaryFunctions().subscribe((functions) => {
      this.functions = functions;
    });

    // load all primary industries
    this.sharedService.getPrimaryIndustries().subscribe((industries) => {
      this.industries = industries;
    });

    // subscribe to form value changes
    this._subscribeToKeywordChanges();
    this._subscribeToCountryChanges();
    this._subscribeToFunctionChanges();
    this._subscribeToIndustryChanges();
    this._subscribeToCareerTypeChanges();
    this._subscribeToEventTypeChanges();
    this._subscribeToInitiativeTypeChanges();
  }

  /**
   * Returns placeholder for input
   */
  getPlaceholder() {
    if (this.entityType === 'career') {
      return 'Job search';
    } else if (this.entityType === 'event') {
      return 'Event search';
    } else if (this.entityType === 'experience') {
      return 'Experience search';
    }
    return 'Keyword Search';
  }

  /**
   * Initialize the filter
   */
  private _initFilter(filter?: Filter) {
    this.filtersForm = this.fb.group({
      keyword: filter && filter.keyword ? filter.keyword : '',
      country: filter && filter.country ? filter.country : '',
      function: filter && filter.function ? filter.function : '',
      industry: filter && filter.industry ? filter.industry : '',
      careerType: filter && filter.careerType ? filter.careerType : '',
      eventType: filter && filter.eventType ? filter.eventType : '',
      initiativeType: filter && filter.initiativeType ? filter.initiativeType : '',
    });
  }

  /**
   * Subscribes to keyword changes
   */
  private _subscribeToKeywordChanges() {
    this.filtersForm.controls['keyword'].valueChanges.pipe(
      debounceTime(500),
      tap(val => {
        this.filtersUpdated.emit(this.filtersForm.value);
      })
    ).subscribe();
  }

  /**
   * Subscribes to country changes
   */
  private _subscribeToCountryChanges() {
    this.filtersForm.controls['country'].valueChanges.pipe(
      debounceTime(500),
      tap(val => {
        this.filtersUpdated.emit(this.filtersForm.value);
      })
    ).subscribe();
  }

  /**
   * Subscribes to function changes
   */
  private _subscribeToFunctionChanges() {
    this.filtersForm.controls['function'].valueChanges.pipe(
      debounceTime(500),
      tap(val => {
        this.filtersUpdated.emit(this.filtersForm.value);
      })
    ).subscribe();
  }

  /**
   * Subscribes to industry changes
   */
  private _subscribeToIndustryChanges() {
    this.filtersForm.controls['industry'].valueChanges.pipe(
      debounceTime(500),
      tap(val => {
        this.filtersUpdated.emit(this.filtersForm.value);
      })
    ).subscribe();
  }

  /**
   * Subscribes to career type changes
   */
  private _subscribeToCareerTypeChanges() {
    this.filtersForm.controls['careerType'].valueChanges.pipe(
      debounceTime(500),
      tap(val => {
        this.filtersUpdated.emit(this.filtersForm.value);
      })
    ).subscribe();
  }

  /**
   * Subscribes to event type changes
   */
  private _subscribeToEventTypeChanges() {
    this.filtersForm.controls['eventType'].valueChanges.pipe(
      debounceTime(500),
      tap(val => {
        this.filtersUpdated.emit(this.filtersForm.value);
      })
    ).subscribe();
  }

  /**
   * Subscribes to initiative type changes
   */
  private _subscribeToInitiativeTypeChanges() {
    this.filtersForm.controls['initiativeType'].valueChanges.pipe(
      debounceTime(500),
      tap(val => {
        this.filtersUpdated.emit(this.filtersForm.value);
      })
    ).subscribe();
  }
}

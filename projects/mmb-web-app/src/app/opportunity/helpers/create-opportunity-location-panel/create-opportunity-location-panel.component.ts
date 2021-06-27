// Core Modules
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

// Services
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'mmb-web-app-create-opportunity-location-panel',
  templateUrl: './create-opportunity-location-panel.component.html',
  styleUrls: ['./create-opportunity-location-panel.component.scss']
})
export class CreateOpportunityLocationPanelComponent implements OnInit {
  @Input() form: FormGroup;
  countries: Array<any>;
  cities: Array<any>;
  selectedCountryName: Object;
  selectedCityName: Object;
  currentCountriesSearch: any;
  currentCitiesSearch: any;
  isSearching: boolean = false;

  constructor(private sharedService: SharedService) { }

  /**
   * Life Cycle hooks
   */
  ngOnInit() {
    this._subscribeToCurrentCountryValueChanges();
    this._subscribeToCurrentCityValueChanges();
  }

  /**
   * subscribes to value changes of current country
   */
   private _subscribeToCurrentCountryValueChanges() {
    const currentCountryControl = this.form.controls['country'];

    this.currentCountriesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.form.controls['city'].setValue('')),
        switchMap(term =>
          this.sharedService.getCountries(currentCountryControl.value)
        ),
        tap(() => this.isSearching = false)
      );
  }

  /**
   * subscribes to value changes of current city
   */
  private _subscribeToCurrentCityValueChanges() {
    console.log(this.form.controls['country'].value.code);
    const currentCityControl = this.form.controls['city'];

    this.currentCitiesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term =>
          this.sharedService.getCitiesByCountry(this.form.controls['country'].value.code, currentCityControl.value)
        ),
        tap(() => this.isSearching = false)
      );
  }


  /**
   * Used to format the result data from the lookup into the
   * display and list values. Maps `{name: "country", id:"id" }` into a string
   */
   resultFormatCountryValue(value: any) {
    if (value.name_ascii) {
      return value.name_ascii;
    }
    return value.name;
  }

  /**
   * Initially binds the string value and then after selecting
   * an item by checking either for string or key/value object.
   */
  inputFormatCountryValue(value: any) {
    if (value.name_ascii) {
      return value.name_ascii;
    }
    if (value.name) {
      return value.name;
    }
    return value;
  }
}

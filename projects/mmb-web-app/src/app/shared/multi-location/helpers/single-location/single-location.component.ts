import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Country } from '../../../types/country.model';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { SharedService } from '../../../shared.service';
import { OrganisationLocation } from 'projects/mmb-web-app/src/app/organisation/types/organisation-location.model';

@Component({
  selector: 'mmb-web-app-single-location',
  templateUrl: './single-location.component.html',
  styleUrls: ['./single-location.component.scss']
})
export class SingleLocationComponent implements OnInit {
  locationForm: FormGroup = this.formBuilder.group({
    country: [''],
    city: [''],
  });
  countriesSearch: any;
  citySearch: any;
  isSearching: boolean;
  isRegionActive: boolean;
  @Output() selectedLocation: EventEmitter<OrganisationLocation> = new EventEmitter<OrganisationLocation>();

  constructor(private sharedService: SharedService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this._subscribeToCountryValueChanges();
    this._subscribeToCityValueChanges();
  }


  /**
   * Checks if a valid country value exists or not to enable/disable city
   */
  isCountryValueExists(value: Country) {
    return value && value.id ? null : '';
  }

  /**
   * Country selected from list
   * @param ev event
   */
  onCountrySelected(ev) {
    this.locationForm.controls['country'].setValue(ev.item);
    this._emitSelectedLocation();
  }

  /**
  * City selected from list
  * @param ev event
  */
  onCitySelected(ev) {
    this.locationForm.controls['city'].setValue(ev.item);
    this._emitSelectedLocation();
  }

  /**
   * City value changes
   * @param ev event
   */
  onCityValueChanges(ev) {
    this._emitSelectedLocation();
  }

  /**
   * Outputs selected location item
   */
  private _emitSelectedLocation() {
    this.selectedLocation.emit({
      country: this.locationForm.controls['country'].value,
      city: this.locationForm.controls['city'].value,
    })
  }

  /**
   * subscribes to value changes of current country
   */
  private _subscribeToCountryValueChanges() {
    const currentCountryControl = this.locationForm.controls['country'];

    this.countriesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.locationForm.controls['city'].setValue('')),
        switchMap(term =>
          this.sharedService.getCountries(currentCountryControl.value)
        ),
        tap(() => this.isSearching = false)
      )
  }

  /**
  * subscribes to value changes of current city
  */
  private _subscribeToCityValueChanges() {
    const currentCityControl = this.locationForm.controls['city'];
    this.citySearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.isSearching = true),
        switchMap(term => {
          let country = this.locationForm.controls['country'].value;
          return this.sharedService.getCitiesByCountry(country.id, currentCityControl.value)
        }),
        tap(() => this.isSearching = false)
      )
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

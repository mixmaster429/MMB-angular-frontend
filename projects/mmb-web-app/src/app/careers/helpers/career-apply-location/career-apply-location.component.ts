import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { SharedService } from '../../../shared/shared.service';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-apply-location',
  templateUrl: './career-apply-location.component.html',
  styleUrls: ['./career-apply-location.component.scss']
})
export class CareerApplyLocationComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() details: Career;
  @Input() title: string;
  @Input() showLocation?: boolean = false;
  @Input() countryControlName: string;
  @Input() cityControlName: string;
  currentCountriesSearch: any;
  currentCitiesSearch: any;
  isSearching: boolean = false;

  constructor(private sharedService: SharedService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this._subscribeToCurrentCountryValueChanges();
    this._subscribeTocityControlNameValueChanges();
  }

  /**
   * subscribes to value changes of current country
   */
  private _subscribeToCurrentCountryValueChanges() {
    const currentCountryControl = this.form.controls[this.countryControlName];

    this.currentCountriesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.form.controls[this.cityControlName].setValue('')),
        switchMap(term =>
          this.sharedService.getCountries(currentCountryControl.value)
        ),
        tap(() => this.isSearching = false)
      );
  }

  /**
   * subscribes to value changes of current city
   */
  private _subscribeTocityControlNameValueChanges() {
    console.log(this.form.controls[this.countryControlName].value.code);
    const cityControlNameControl = this.form.controls[this.cityControlName];
    this.currentCitiesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term =>
          this.sharedService.getCitiesByCountry(this.form.controls[this.countryControlName].value.code, cityControlNameControl.value)
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

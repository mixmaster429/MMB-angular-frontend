import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PersonalInfoStepService } from './personal-info.service';
import { Status } from '../apply.component';
import { CareerApplicationGet } from '../../types/career-application.model';
import { debounceTime, distinctUntilChanged, map, count, tap, switchMap } from 'rxjs/operators';
import { SharedService } from '../../../shared/shared.service';
import { Country } from '../../../shared/types/country.model';
import { Observable } from 'rxjs';
import { ApplyCareerService } from '../apply.service';

@Component({
  selector: 'mmb-web-app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  _application: CareerApplicationGet = new CareerApplicationGet();
  userProfile = this.applyService.getUserProfile();
  countries: Country[];
  currentCountriesSearch: any;
  currentCitiesSearch: any;
  targetCountriesSearch: any;
  targetCitiesSearch: any;
  currentCurrencySearch: any;
  targetCurrencySearch: any;
  isSearching: boolean = false;
  @Input()
  set application(val: CareerApplicationGet) {
    this._application = val;

    if (val) {
      // this.initializeFormValues(val);
    }
  }

  @Output() _applicationChange: EventEmitter<CareerApplicationGet> = new EventEmitter<CareerApplicationGet>();

  personalInfoForm = this.fb.group({
    currentRole: ['', Validators.required],
    updateCurrentRoleToProfile: [true],
    currentCountry: new FormControl('', Validators.required),
    currentCity: new FormControl('', Validators.required),
    updateCurrentLocationToProfile: [true],
    currentCurrency: new FormControl('', Validators.required),
    currentBase: new FormControl('', Validators.required),
    currentBenefits: new FormControl('', Validators.required),
    updateCurrentCompensationToProfile: [true],
    targetCountry: new FormControl('', Validators.required),
    targetCity: new FormControl('', Validators.required),
    targetCurrency: new FormControl('', Validators.required),
    targetBase: new FormControl('', Validators.required),
    targetBenefits: new FormControl('', Validators.required),
    updateTargetCompensationToProfile: [true],
  });

  constructor(private fb: FormBuilder, private personalInfoStepService: PersonalInfoStepService,
    private sharedService: SharedService, private applyService: ApplyCareerService) {
    this.personalInfoStepService.status = Status.error;

    this.personalInfoForm.valueChanges.subscribe((val) => {
      this.personalInfoStepService.status = this.personalInfoForm.valid ? Status.done : Status.error;
      this.applyService.setPersonalInfoStepData(this.personalInfoForm);
    });

    // subscribe to value changes for countries inputs
    this._subscribeToCurrentCountryValueChanges();
    this._subscribeToTargetCountryValueChanges();

    // subscribe to value changes for cities inputs
    this._subscribeToCurrentCityValueChanges();
    this._subscribeToTargetCityValueChanges();

    // subscribe to currency inputs
    this._subscribeToCurrentCurrencyValueChanges();
    this._subscribeToTargetCurrencyValueChanges();
  }

  ngOnInit() {
    this.userProfile.subscribe((response: any) => {
      this.initializeFormValues(response);
    });
  }

  /**
   * Initializes values from pending application draft
   * @param val Career application values
   */
  initializeFormValues(val: CareerApplicationGet) {
    this.personalInfoForm.controls['currentRole'].setValue(val.credentials ? val.credentials.professional_title : '');
    this.personalInfoForm.controls['currentCountry'].setValue(val.details && val.details.country_current ? val.details.country_current : '');
    this.personalInfoForm.controls['currentCity'].setValue(val.details && val.details.city_current ? val.details.city_current : val.details.city_custom_current);
    this.personalInfoForm.controls['currentCurrency'].setValue(val.credentials && val.credentials.compensation_currency_current ? val.credentials.compensation_currency_current : '');
    this.personalInfoForm.controls['currentBase'].setValue(val.credentials && val.credentials.compensation_base_current ? val.credentials.compensation_base_current : 0);
    this.personalInfoForm.controls['currentBenefits'].setValue(val.credentials && val.credentials.compensation_benefits_current ? val.credentials.compensation_benefits_current : 0);
    this.personalInfoForm.controls['targetCountry'].setValue(val.details && val.details.country_target ? val.details.country_target : '');
    this.personalInfoForm.controls['targetCity'].setValue(val.details && val.details.city_target ? val.details.city_target : '');
    this.personalInfoForm.controls['targetCurrency'].setValue(val.credentials && val.credentials.compensation_currency_target ? val.credentials.compensation_currency_target : '');
    this.personalInfoForm.controls['targetBase'].setValue(val.credentials && val.credentials.compensation_base_target ? val.credentials.compensation_base_target : 0);
    this.personalInfoForm.controls['targetBenefits'].setValue(val.credentials && val.credentials.compensation_benefits_target ? val.credentials.compensation_benefits_target : 0);
    // set the form data for confirmation
    this.applyService.setPersonalInfoStepData(this.personalInfoForm);
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
  * Used to format the result data from the lookup into the
  * display and list values. Maps `{name: "country", id:"id" }` into a string
  */
  resultFormatCurrencyValue(value: any) {
    if (value && value.name) {
      return value.name;
    }
    return value;
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

  /**
    * Initially binds the string value and then after selecting
    * an item by checking either for string or key/value object.
  */
  inputFormatCurrencyValue(value: any) {
    if (value && value.name) {
      return value.name;
    }
    return value;
  }

  /**
   * Checks if a valid country value exists or not to enable/disable city
   */
  isCountryValueExists(value: Country) {
    return value && value.id ? null : '';
  }

  /**
   * subscribes to value changes of current country
   */
  private _subscribeToCurrentCountryValueChanges() {
    const currentCountryControl = this.personalInfoForm.controls['currentCountry'];

    this.currentCountriesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.personalInfoForm.controls['currentCity'].setValue('')),
        switchMap(term =>
          this.sharedService.getCountries(currentCountryControl.value)
        ),
        tap(() => this.isSearching = false)
      )
  }

  /**
   * subscribes to value changes of current currency
   */
  private _subscribeToCurrentCurrencyValueChanges() {
    const currentCurrencyControl = this.personalInfoForm.controls['currentCurrency'];
    this.currentCurrencySearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.isSearching = true),
        switchMap(term =>
          this.sharedService.getCurrencies(currentCurrencyControl.value)
        ),
        tap(() => this.isSearching = false)
      )
  }

  /**
   * subscribes to value changes of current currency
   */
  private _subscribeToTargetCurrencyValueChanges() {
    const targetCurrencyControl = this.personalInfoForm.controls['targetCurrency'];
    this.targetCurrencySearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.isSearching = true),
        switchMap(term =>
          this.sharedService.getCurrencies(targetCurrencyControl.value)
        ),
        tap(() => this.isSearching = false)
      )
  }

  /**
   * subscribes to value changes of current city
   */
  private _subscribeToCurrentCityValueChanges() {
    const currentCityControl = this.personalInfoForm.controls['currentCity'];
    this.currentCitiesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.isSearching = true),
        switchMap(term => {
          let country = this.personalInfoForm.controls['currentCountry'].value;
          return this.sharedService.getCitiesByCountry(country.id, currentCityControl.value)
        }
        ),
        tap(() => this.isSearching = false)
      )
  }

  /**
   * subscribes to value changes of target city
   */
  private _subscribeToTargetCityValueChanges() {
    const targetCityControl = this.personalInfoForm.controls['targetCity'];
    this.targetCitiesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.isSearching = true),
        switchMap(term => {
          let country = this.personalInfoForm.controls['targetCountry'].value;
          return this.sharedService.getCitiesByCountry(country.id, targetCityControl.value)
        }
        ),
        tap(() => this.isSearching = false)
      )
  }

  /**
  * subscribes to value changes of target country
  */
  private _subscribeToTargetCountryValueChanges() {
    const targetCountryControl = this.personalInfoForm.controls['targetCountry'];
    this.targetCountriesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() =>
          this.personalInfoForm.controls['targetCity'].setValue('')),
        switchMap(term =>
          this.sharedService.getCountries(targetCountryControl.value)
        ),
        tap(() => this.isSearching = false)
      )
  }
}

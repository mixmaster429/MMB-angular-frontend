import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'mmb-web-app-user-onboarding-step-location-info',
  templateUrl: './user-onboarding-step-location-info.component.html',
  styleUrls: ['./user-onboarding-step-location-info.component.scss']
})
export class UserOnboardingStepLocationInfoComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();
  currentCountriesSearch: any;
  currentCitiesSearch: any;
  isSearching: boolean = false;
  activeStep: number = 1;
  userConnectionItems: string[] = [''];
  userExperienceItems: string[] = [''];
  MAX_ALLOWED_ROWS: number = 3;

  constructor(private sharedService: SharedService) { }

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

  /**
   * on next step clicked
   */
  onNextStep() {
    this.next.emit();
  }

  /**
   * on back step clicked
   */
  onBackStep() {
    this.back.emit();
  }

  /**
   * On next step navigation
   */
     onNextLocationStep() {
      this.activeStep++;
    }

    /**
     * Go back
     */
    onBackLocationStep() {
      if (this.activeStep > 1) {
        this.activeStep--;
      }
    }

   onAddConnectionItem(items: string[]) {
    if (items.length < this.MAX_ALLOWED_ROWS) {
      this.userConnectionItems.push('');
    }
  }

  onRemoveConnectionItem(index: number, items: string[]) {
    this.userConnectionItems.splice(index, 1);
  }

   onAddExperienceItem(items: string[]) {
    if (items.length < this.MAX_ALLOWED_ROWS) {
      this.userExperienceItems.push('');
    }
  }

  onRemoveExperienceItem(index: number, items: string[]) {
    this.userExperienceItems.splice(index, 1);
  }
}

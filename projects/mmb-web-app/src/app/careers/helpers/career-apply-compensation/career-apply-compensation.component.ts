import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../shared/shared.service';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'mmb-web-app-career-apply-compensation',
  templateUrl: './career-apply-compensation.component.html',
  styleUrls: ['./career-apply-compensation.component.scss']
})
export class CareerApplyCompensationComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() title: string;
  @Input() compensationCurrency: string;
  @Input() compensationSalary: string;
  @Input() compensationBenefits: string;
  currentCurrenciesSearch: any;
  isSearching: boolean = false;

  constructor(private sharedService: SharedService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this._subscribeToCurrentCurrencyValueChanges();
  }

  /**
   * subscribes to value changes of current currency
   */
  private _subscribeToCurrentCurrencyValueChanges() {
    const currentCurrencyControl = this.form.controls[this.compensationCurrency];

    this.currentCurrenciesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term =>
          this.sharedService.getCurrencies(currentCurrencyControl.value)
        ),
        tap(() => this.isSearching = false)
      );
  }

  /**
   * Used to format the result data from the lookup into the
   * display and list values. Maps `{name: "currency", id:"id" }` into a string
   */
  resultFormatCurrencyValue(value: any) {
    if (value.name_ascii) {
      return value.name_ascii;
    }
    return value.name;
  }

  /**
   * Initially binds the string value and then after selecting
   * an item by checking either for string or key/value object.
   */
  inputFormatCurrencyValue(value: any) {
    if (value.name_ascii) {
      return value.name_ascii;
    }
    if (value.name) {
      return value.name;
    }
    return value;
  }

}

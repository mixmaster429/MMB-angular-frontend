import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { SharedService } from 'projects/mmb-web-app/src/app/shared/shared.service';
import { TicketPrice } from '../../../types/ticket-price.model';

@Component({
  selector: 'mmb-web-app-ticket-price-item',
  templateUrl: './ticket-price-item.component.html',
  styleUrls: ['./ticket-price-item.component.scss']
})
export class TicketPriceItemComponent implements OnInit {
  ticketPriceForm: FormGroup = this.formBuilder.group({
    currency: [''],
    price: [''],
    label: [''],
  });
  currenciesSearch: any;
  isSearching: boolean;
  @Output() ticketsPricesUpdated: EventEmitter<TicketPrice> = new EventEmitter<TicketPrice>()

  constructor(private formBuilder: FormBuilder,
    private sharedService: SharedService) { }

  ngOnInit() {
    this._subscribeToCurrencyValueChanges();

    this.ticketPriceForm.valueChanges.subscribe((ticketPrices: TicketPrice) => {
      this.ticketsPricesUpdated.emit(ticketPrices);
    })
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

  /**
   * Currency selected
   */
  onCurrencySelected(ev) {
    this.ticketPriceForm.controls['currency'].setValue(ev.item.id);
  }

  /**
  * subscribes to value changes of currency
  */
  private _subscribeToCurrencyValueChanges() {
    const currencyControl = this.ticketPriceForm.controls['currency'];
    this.currenciesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.isSearching = true),
        switchMap(term =>
          this.sharedService.getCurrencies(currencyControl.value)
        ),
        tap(() => this.isSearching = false)
      )
  }
}

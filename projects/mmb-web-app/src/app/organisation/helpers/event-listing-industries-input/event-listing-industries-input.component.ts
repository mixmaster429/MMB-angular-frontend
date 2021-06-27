import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'mmb-web-app-event-listing-industries-input',
  templateUrl: './event-listing-industries-input.component.html',
  styleUrls: ['./event-listing-industries-input.component.scss']
})
export class EventListingIndustriesInputComponent implements OnInit {
  industrySearch: any;
  isSearching: boolean;
  industryForm: FormGroup = this.formBuilder.group({
    industry: ['']
  });
  selectedIndustries: any[] = [];
  @Output() industriesSelected: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService) { }

  ngOnInit() {
    this._subscribeToIndustryValueChanges();
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
    // blank as nothing is to be shown as selected
  }

  /**
   * Country selected from list
   * @param ev event
   */
  onIndustrySelected(ev) {
    this.industryForm.controls['industry'].setValue('');
    if (this.selectedIndustries.filter(region => region.name === ev.item.name).length === 0) {
      this.selectedIndustries.push(ev.item);
    }
    this.industriesSelected.emit(this.selectedIndustries);
  }

  /**
   * Remove the selected item from the list
   * @param index selected index to be removed
   */
  onRemoveIndustry(index: number) {
    this.selectedIndustries.splice(index, 1);
    this.industriesSelected.emit(this.selectedIndustries);
  }

  /**
  * subscribes to value changes of current city
  */
  private _subscribeToIndustryValueChanges() {
    const industryControl = this.industryForm.controls['industry'];

    this.industrySearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term =>
          this.sharedService.getSecondaryIndustries(industryControl.value)
        ),
        tap(() => this.isSearching = false)
      )
  }

}

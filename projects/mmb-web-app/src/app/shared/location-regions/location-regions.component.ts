import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { SharedService } from '../shared.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mmb-web-app-location-regions',
  templateUrl: './location-regions.component.html',
  styleUrls: ['./location-regions.component.scss']
})
export class LocationRegionsComponent implements OnInit {
  regionSearch: any;
  isSearching: boolean;
  locationForm: FormGroup = this.formBuilder.group({
    region: ['']
  });
  selectedRegions: any[] = [];
  @Output() regionSelected: EventEmitter<any[]> = new EventEmitter<any[]>();
  constructor(private sharedService: SharedService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this._subscribeToRegionValueChanges();
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
  onRegionSelected(ev) {
    this.locationForm.controls['region'].setValue('');
    if (this.selectedRegions.filter(region => region.name === ev.item.name).length === 0) {
      this.selectedRegions.push(ev.item);
    }
    this.regionSelected.emit(this.selectedRegions);
  }

  /**
   * Remove the selected item from the list
   * @param index selected index to be removed
   */
  onRemoveRegion(index: number) {
    this.selectedRegions.splice(index, 1);
  }

  /**
 * subscribes to value changes of current city
 */
  private _subscribeToRegionValueChanges() {
    const regionControl = this.locationForm.controls['region'];

    this.regionSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term =>
          this.sharedService.getRegions(regionControl.value)
        ),
        tap(() => this.isSearching = false)
      )
  }
}

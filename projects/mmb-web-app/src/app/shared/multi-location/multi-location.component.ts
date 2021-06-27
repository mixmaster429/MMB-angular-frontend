import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrganisationLocation } from '../../organisation/types/organisation-location.model';

@Component({
  selector: 'mmb-web-app-multi-location',
  templateUrl: './multi-location.component.html',
  styleUrls: ['./multi-location.component.scss']
})
export class MultiLocationComponent implements OnInit {
  locations: OrganisationLocation[] = [{}]; // initialize the 1st item
  @Output() locationsUpdated: EventEmitter<OrganisationLocation[]> = new EventEmitter<OrganisationLocation[]>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Adds a row of locations
   */
  onAddRow() {
    this.locations.push({});
  }

  /** 
   * Removes row from locations array
  */
  onRemoveRow(index: number) {
    this.locations.splice(index, 1);
  }

  /**
   * Location updated
   */
  onLocationUpdated(ev: OrganisationLocation, i: number) {
    if (this.locations && this.locations[i]) {
      let location = this.locations[i];
      // Do not set direct object as it empties the value
      location.region = ev.region;
      location.city = ev.city;
      location.country = ev.country;
    }
    this.locationsUpdated.emit(this.locations);
  }
}

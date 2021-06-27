import { Component, OnInit } from '@angular/core';
import { PULSE_LIST } from '../types/pulse-list.const';

@Component({
  selector: 'mmb-web-app-pulse-listing',
  templateUrl: './pulse-listing.component.html',
  styleUrls: ['./pulse-listing.component.scss']
})
export class PulseListingComponent implements OnInit {
  pulses = PULSE_LIST;
  constructor() { }

  ngOnInit() {
  }

}

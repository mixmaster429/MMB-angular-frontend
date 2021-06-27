import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrganisationService } from '../../organisation.service';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EVENT_TYPES } from '../../../events/types/event-types.enum';
import { OrganisationEvent } from '../../types/organisation-event.model';
import { THEME_OPTIONS } from '../../types/theme-options.const';
import { PRICE_OPTIONS } from '../../types/price-options.const';
import { TicketPrice } from '../../types/ticket-price.model';
import { OrganisationLocation } from '../../types/organisation-location.model';

@Component({
  selector: 'mmb-web-app-new-event-basic',
  templateUrl: './new-event-basic.component.html',
  styleUrls: ['./new-event-basic.component.scss']
})
export class NewEventBasicComponent implements OnInit {
  @Input() slug: string;
  @Input() organisationId: number;
  Editor = ClassicEditor;
  eventForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    headline: ['', Validators.required],
    redirectUrl: ['', Validators.required],
    eventType: [null, Validators.required],
    theme: [null, Validators.required],
    price: [null, Validators.required],
    locations: [null, Validators.required],
    summary: ['', Validators.required],
    description: ['', Validators.required],
    criteria: ['', Validators.required],
    benefits: ['', Validators.required],
    industries: [null, Validators.required],
    tickets: [null, Validators.required]
  });
  eventTypes = EVENT_TYPES;
  themeOptions = THEME_OPTIONS;
  priceOptions = PRICE_OPTIONS;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private organisationService: OrganisationService,
    private router: Router) { }

  ngOnInit() {
  }

  /**
   * Locations updated in multi location component
   * @param ev event
   */
  onLocationsUpdated(ev: OrganisationLocation[]) {
    let locations: OrganisationLocation[] = this.eventForm.controls['locations'].value || [];
    let i = 0;
    // iterate through all organisation locations and set the value
    for (let location of ev) {
      if (!locations[i]) {
        locations[i] = {};
      }
      if (location.country) {
        locations[i].country = (<any>location.country).id;
        locations[i].city = (<any>location.city).id;
      }
      if (location.region) {
        locations[i].region = (<any>location.region).id;
      }
      i++;
    }
    this.eventForm.controls['locations'].setValue(locations);
  }

  /**
   * Ticket prices updated
   * @param ticketPrices ticket prices array
   */
  onTicketPricesUpdated(ticketPrices: TicketPrice[]) {
    this.eventForm.controls['tickets'].setValue(ticketPrices);
  }

  /**
   * Industries selection is updated
   */
  onIndustriesSelected(industries: []) {
    let selectedIndustries = [];
    let i = 0;
    for (let industry of industries) {
      selectedIndustries[i] = { industry: (<any>industry).id };
      i++;
    }
    this.eventForm.controls['industries'].setValue(selectedIndustries);
  }

  /**
   * Save the new event
   */
  onSave() {
    if (this.eventForm.invalid) {
      this.toastr.error('Please fill all the required fields before continuing', 'Error');
      return;
    }
    // post the new event to api
    let newEvent: OrganisationEvent = {
      organisation: this.organisationId, //  check if we need to send organisation id
      headline: this.eventForm.controls['headline'].value,
      title: this.eventForm.controls['title'].value,
      event_type: this.eventForm.controls['eventType'].value,
      website_redirect_url: this.eventForm.controls['redirectUrl'].value,
      theme: this.eventForm.controls['theme'].value,
      price: this.eventForm.controls['price'].value,
      summary: this.eventForm.controls['summary'].value,
      description: this.eventForm.controls['description'].value,
      benefits: this.eventForm.controls['benefits'].value,
      criteria: this.eventForm.controls['criteria'].value,
      locations: this.eventForm.controls['locations'].value,
      industries: this.eventForm.controls['industries'].value,
      tickets: this.eventForm.controls['tickets'].value,
    };

    this.organisationService.createEvent(newEvent).subscribe((response) => {
      this.toastr.success('Successfully created the new event', 'Success');
      this.router.navigate([`/organisation/customize/${this.slug}`]);
    }, (err) => {
      this.toastr.error('Unable to post the new event!', 'Error');
    })
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { OpportunityService } from '../opportunity.service';

export enum PUBLISH_MODES {
  ANONYMOUS = 1,
  ALLOW_USER_PROFILE = 3
}
// TODO: Move to global settings
export const SETTINGS = {
  MAX_CHAR_COUNT_SUMMARY: 60,
  MIN_CHAR_COUNT_DESCRIPTION: 100,
};
@Component({
  selector: 'mmb-web-app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.scss']
})
export class CreateOpportunityComponent implements OnInit, OnDestroy {
  opportunitySettings = SETTINGS;
  createOpportunityForm: FormGroup = this.formBuilder.group({
    type: [1, Validators.required],
    category: ['', Validators.required],
    country: ['', Validators.required],
    city: [''],
    summary: ['', [Validators.required, Validators.maxLength(this.opportunitySettings.MAX_CHAR_COUNT_SUMMARY)]],
    description: ['', [Validators.required, , Validators.minLength(this.opportunitySettings.MIN_CHAR_COUNT_DESCRIPTION)]],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    tags: [[]],
    tag: [],
    isAnonymously: [] // checbox - to check if it is anonymous post or not
  });
  private _publishMode: number = PUBLISH_MODES.ALLOW_USER_PROFILE;
  private _publishSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private opportunityService: OpportunityService,
              private router: Router) { }

  ngOnInit() {
    // subscribe to toggle box
    this._subscribeToPublishModeChanges();
  }

  ngOnDestroy() {
    if (this._publishSubscription) {
      this._publishSubscription.unsubscribe();
    }
  }

  /**
   * Submit to create opportunity
   */
  onSubmit() {
    const convertedDate = this._convertTimeStamp();

    const data = {
      opportunity: this.createOpportunityForm.controls['description'].value,
      opportunity_type: this.createOpportunityForm.controls['type'].value,
      category: this.createOpportunityForm.controls['category'].value,
      country: this.createOpportunityForm.controls['country'].value,
      city: this.createOpportunityForm.controls['city'].value,
      title: this.createOpportunityForm.controls['summary'].value,
      start_date: convertedDate.startDateFormated,
      end_date: convertedDate.endDateFormated,
      allow_profile_visible: this._publishMode,
      tags: this.createOpportunityForm.controls['tags'].value
    };

    if (this.createOpportunityForm.invalid) {
      this.toastr.error('Please fill all the required fields', 'Error');
      return;
    }

    this.opportunityService.createOpportunity(data).subscribe(() => {
      this.toastr.success('Created the opportunity successfully', 'Success');
      this.router.navigate(['/opportunity']);
    }, (err) => {
      this.toastr.error('Unable to create opportunity', 'Error');
    });
  }

  /**
   * Save the opportunity data for later
   */
  onSave() {
    this.opportunityService.saveOpportunity().subscribe(() => {
      this.toastr.success('Saved the opportunity successfully', 'Success');
      this.router.navigate(['/opportunity']);
    }, (err) => {
      this.toastr.error('Unable to save opportunity', 'Error');
    });
  }

  /**
   * Cancels the create opportunity
   */
  onCancel() {
    this.createOpportunityForm.reset();
    this.router.navigate(['/opportunity']);
  }

  /**
   * Subscribe to anoymous toggle
   */
  private _subscribeToPublishModeChanges() {
    this._publishSubscription = this.createOpportunityForm.controls['isAnonymously'].valueChanges.subscribe((newValue: boolean) => {
      this._publishMode = newValue ? PUBLISH_MODES.ANONYMOUS : PUBLISH_MODES.ALLOW_USER_PROFILE;
    });
  }

  /**
   * Converts timestamp to
   */
  private _convertTimeStamp() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();

    const startDateFormated = `${this.createOpportunityForm.controls['startDate'].value}T${hour}:${minutes}:${seconds}Z`;
    const endDateFormated = `${this.createOpportunityForm.controls['endDate'].value}T${hour}:${minutes}:${seconds}Z`;
    return {
      startDateFormated,
      endDateFormated
    };
  }
}

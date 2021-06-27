import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrganisationCareer } from '../../types/organisation-career.model';
import { OrganisationService } from '../../organisation.service';
import { Router } from '@angular/router';
import { SENIORITY_OPTIONS } from '../../types/seniority-options.const';
import { OrganisationLocation } from '../../types/organisation-location.model';

@Component({
  selector: 'mmb-web-app-new-job-basic',
  templateUrl: './new-job-basic.component.html',
  styleUrls: ['./new-job-basic.component.scss']
})
export class NewJobBasicComponent implements OnInit {
  @Input() slug: string;
  @Input() organisationId: number;
  jobForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    headline: ['', Validators.required],
    summary: ['', Validators.required],
    description: ['', Validators.required],
    criteria: ['', Validators.required],
    benefits: ['', Validators.required],
    seniority: [null, Validators.required],
    locations: [null, Validators.required]
  });
  seniorityOptions = SENIORITY_OPTIONS;
  Editor = ClassicEditor;

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
    let locations: OrganisationLocation[] = this.jobForm.controls['locations'].value || [];
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
    this.jobForm.controls['locations'].setValue(locations);
  }

  /**
   * Regions selected
   * @param ev event
   */
  onRegionSelected(regions) {
    let locations: OrganisationLocation[] = this.jobForm.controls['locations'].value || [];
    let i = 0;

    for (let location of regions) {
      if (!locations[i]) {
        locations[i] = {};
      }
      if (location.region) {
        locations[i].region = (<any>location.region).id;
      }
      i++;
    }
    this.jobForm.controls['locations'].setValue(locations);
  }

  /**
   * Save the new job
   */
  onSave() {
    if (this.jobForm.invalid) {
      this.toastr.error('Please fill all the required fields before continuing', 'Error');
      return;
    }
    // post the new job to api
    let newJob: OrganisationCareer = {
      organisation: this.organisationId, //  check if we need to send organisation id
      headline: this.jobForm.controls['headline'].value,
      title: this.jobForm.controls['title'].value,
      summary: this.jobForm.controls['summary'].value,
      description: this.jobForm.controls['description'].value,
      benefits: this.jobForm.controls['benefits'].value,
      criteria: this.jobForm.controls['criteria'].value,
      locations: this.jobForm.controls['locations'].value,
      seniority: this.jobForm.controls['seniority'].value
    };

    this.organisationService.createJob(newJob).subscribe((response) => {
      this.toastr.success('Successfully created the new job', 'Success');
      this.router.navigate([`/organisation/customize/${this.slug}`]);
    }, (err) => {
      this.toastr.error('Unable to post the new job!', 'Error');
    })
  }
}

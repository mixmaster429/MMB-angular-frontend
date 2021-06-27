import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrganisationService } from '../../organisation.service';
import { Router } from '@angular/router';
import { INITIATIVE_TYPES } from '../../types/initiative-types.const';
import { INITIATIVE_THEMES } from '../../types/initiative-themes.const';
import { INITIATIVE_PRICE_OPTS } from '../../types/initiative-price-options.const';
import { OrganisationInitiative } from '../../types/organisation-initiative.model';
import { OrganisationLocation } from '../../types/organisation-location.model';

@Component({
  selector: 'mmb-web-app-new-initiative-basic',
  templateUrl: './new-initiative-basic.component.html',
  styleUrls: ['./new-initiative-basic.component.scss']
})
export class NewInitiativeBasicComponent implements OnInit {
  @Input() slug: string;
  @Input() organisationId: number;
  Editor = ClassicEditor;
  initiativeForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    headline: ['', Validators.required],
    redirectUrl: ['', Validators.required],
    initiativeType: [null, Validators.required],
    theme: [null, Validators.required],
    price: [null, Validators.required],
    locations: [null, Validators.required],
    summary: ['', Validators.required],
    description: ['', Validators.required],
    criteria: ['', Validators.required],
    benefits: ['', Validators.required],
  });
  initiativeTypes = INITIATIVE_TYPES;
  initiativeThemes = INITIATIVE_THEMES;
  priceOptions = INITIATIVE_PRICE_OPTS;

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
    let locations: OrganisationLocation[] = this.initiativeForm.controls['locations'].value || [];
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
    this.initiativeForm.controls['locations'].setValue(locations);
  }

  /**
   * Save the new initiative
   */
  onSave() {
    if (this.initiativeForm.invalid) {
      this.toastr.error('Please fill all the required fields before continuing', 'Error');
      return;
    }
    // post the new initiative to api
    let newInitiative: OrganisationInitiative = {
      organisation: this.organisationId, //  check if we need to send organisation id
      headline: this.initiativeForm.controls['headline'].value,
      title: this.initiativeForm.controls['title'].value,
      initiative_type: this.initiativeForm.controls['initiativeType'].value,
      website_redirect_url: this.initiativeForm.controls['redirectUrl'].value,
      theme: this.initiativeForm.controls['theme'].value,
      price: this.initiativeForm.controls['price'].value,
      summary: this.initiativeForm.controls['summary'].value,
      description: this.initiativeForm.controls['description'].value,
      benefits: this.initiativeForm.controls['benefits'].value,
      criteria: this.initiativeForm.controls['criteria'].value,
      locations: this.initiativeForm.controls['locations'].value,
    };

    this.organisationService.createInitiative(newInitiative).subscribe((response) => {
      this.toastr.success('Successfully created the new initiative', 'Success');
      this.router.navigate([`/organisation/customize/${this.slug}`]);
    }, (err) => {
      this.toastr.error('Unable to post the new initiative!', 'Error');
    })
  }
}

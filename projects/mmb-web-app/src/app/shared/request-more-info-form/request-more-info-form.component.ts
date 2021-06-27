import { RequestMoreInfoFormService } from './request-more-info-form.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'mmb-web-app-request-more-info-form',
  templateUrl: './request-more-info-form.component.html',
  styleUrls: ['./request-more-info-form.component.scss']
})
export class RequestMoreInfoFormComponent implements OnInit {
  newRequestInfoForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    roleTitle: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    organisationName: ['', Validators.required],
    location: ['', Validators.required],
    queryType: ['', Validators.required],
    additionalDetails: ['', Validators.required],
  });

  countries$ = this.sharedService.getCountries();

  constructor(private sharedService: SharedService,
              private requestMoreInfoFormService: RequestMoreInfoFormService,
              private fb: FormBuilder) { }

  /**
   * Sends form data to the service
   */
  sendFormData = () => {
    if (!this.newRequestInfoForm.valid) {
      this.newRequestInfoForm.markAllAsTouched();
      return;
    }

    // TODO: Check with BE whether we need to serialize/deserialize at our end
    // or do they provide camelcase naming objects
    // then, we just map the objects directly without serializing/deserializing ti
    const newInfoRequest = {
      first_name: this.newRequestInfoForm.value.firstName,
      last_name: this.newRequestInfoForm.value.lastName,
      role_title: this.newRequestInfoForm.value.roleTitle,
      email: this.newRequestInfoForm.value.email,
      phone: this.newRequestInfoForm.value.phone,
      organisation_name: this.newRequestInfoForm.value.organisationName,
      location: this.newRequestInfoForm.value.location,
      query_type: this.newRequestInfoForm.value.queryType,
      additional_details: this.newRequestInfoForm.value.additionalDetails
    };

    // send the form to api
    this.requestMoreInfoFormService.sendFormData(newInfoRequest).subscribe();
  }

  ngOnInit() {
  }
}

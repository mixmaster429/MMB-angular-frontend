import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mmb-web-app-user-onboarding-set-profile-workflow',
  templateUrl: './user-onboarding-set-profile-workflow.component.html',
  styleUrls: ['./user-onboarding-set-profile-workflow.component.scss']
})
export class UserOnboardingSetProfileWorkflowComponent implements OnInit {
  activeStep: number = 1;
  onboardingForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.onboardingForm = this.formBuilder.group({
      // step 1
      persona: ['', Validators.required],
      // step 2
      areasOfInterest: new FormArray([]),
      isCustomAreaOfInterestProvided: [false],
      areaOfInterestCustom: [''],
      // step 3
      userNeedsSupportOn: [[]],
      userNeedsHelpOn: [[]],
      userOffers: [['']],
      // step 4
      areasInterestedIn: [[]],
      // step 5
      country: ['', Validators.required],
      city: ['', Validators.required],
      connection: ['', Validators.required],
      experience: ['', Validators.required],
      // step 6
      professionalProfileForm: this.formBuilder.group({
        professionalTitle: ['', Validators.required],
        linkedInProfile: [''],
        industryName: ['']
      }),
    });
  }

  /**
   * On next step navigation
   */
  onNextStep() {
    this.activeStep++;
  }

  /**
   * Go back
   */
  onBackStep() {
    if (this.activeStep > 1) {
      this.activeStep--;
    }
  }
}

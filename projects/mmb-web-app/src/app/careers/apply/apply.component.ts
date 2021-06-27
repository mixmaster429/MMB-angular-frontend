import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PersonalInfoStepService } from './personal-info/personal-info.service';
import { QuestionsStepService } from './questions/questions.service';
import { DocsUploadStepService } from './docs-upload/docs-upload.service';
import { ApplyCareerService } from './apply.service';
import { CareerApplicationGet, CareerApplication } from '../types/career-application.model';
import { Career } from '../../shared/types/career.model';
import { ToastrService } from 'ngx-toastr';
import { CareerService } from '../careers.service';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CareerApplyCancelModalComponent } from '../helpers/career-apply-cancel-modal/career-apply-cancel-modal.component';

export enum Status {
  pending = 'pending',
  active = 'active',
  error = 'error',
  warning = 'warning',
  done = 'done'
}

@Component({
  selector: 'mmb-web-app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  applyForm: FormGroup = this.formBuilder.group({
    cv: ['', Validators.required],
    coverLetter: ['', Validators.required],
    questions: [[], Validators.required],
    preferredCountry: ['', Validators.required],
    preferredCity: ['', Validators.required],
    targetCompensationCurrency: ['', Validators.required],
    targetCompensationSalary: ['', Validators.required],
    targetCompensationBenefits: ['', Validators.required],
    professionalTitle: ['', Validators.required],
    currentCountry: ['', Validators.required],
    currentCity: ['', Validators.required],
    currentCompensationCurrency: ['', Validators.required],
    currentCompensationSalary: ['', Validators.required],
    currentCompensationBenefits: ['', Validators.required],
  });

  @Input()
  set selectedCareerDetails(value: Career) {
    this.applyService.selectedCareerDetails = value;
  }

  get selectedCareerDetails(): Career {
    return this.applyService.selectedCareerDetails;
  }

  @Output() applicationSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentStep: number = 1;
  cvStepStatus: Status = Status.active;
  infoStepStatus: Status;
  questionsStepStatus: Status;
  confirmationStepStatus: Status;
  career: Observable<Career>;
  application: BehaviorSubject<CareerApplicationGet> = new BehaviorSubject<CareerApplicationGet>(new CareerApplicationGet());
  applicationForm: CareerApplicationGet;
  isPageLoading: boolean = true;
  applied: boolean;

  constructor(
    private docsUploadStepService: DocsUploadStepService,
    private personalInfoStepService: PersonalInfoStepService,
    private questionsStepService: QuestionsStepService,
    private applyService: ApplyCareerService,
    private careerService: CareerService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.route.params.pipe(
      map(p => {
        return { slug: p.slug, query: p.query };
      }),
      tap(request => {
        // User has clicked on a career detail tile
          this.careerService.getCareerDetails(request.slug).pipe(
            map((response) => this.selectedCareerDetails = response)
          ).subscribe(() => this.isPageLoading = false);
      })
    ).subscribe();

    this.applyService.getPendingApplication('international-rescue-committee-investigator')
      .subscribe((_application: CareerApplicationGet) => {
        this.applicationForm = _application;
        this.application.next(_application);
      });
  }

  /**
   * Confirm submission
   */
  onConfirm() {
    if (this.docsUploadStepService.status !== Status.done) {
      this.toastr.error('Please upload CV/Cover letter to complete the step', 'Step not completed');
      return;
    }
    if (this.questionsStepService.status !== Status.done) {
      this.toastr.error('Please answer all mandatory questions', 'Step not completed');
      return;
    }
    if (this.personalInfoStepService.status !== Status.done) {
      this.toastr.error('Please answer all required information', 'Step not completed');
      return;
    }
    // send application
    this.applyService.isSubmittingApplication$.next(true);
    let application: CareerApplication = this._getApplicationPayload();

    // update profile, if applicable
    this._updateUserProfileCredentials();
    this._updateUserProfileLocationDetails();

    // submit application
    this._submitApplication(application);
  }


  /**
   * Saves draft
   */
  onSaveDraft() {
    // prepare the career application model
    let _application: CareerApplication = new CareerApplication();
    _application.id = this.applicationForm.id;
    // _application.role_title_current = this.applicationForm.role_title_current;
    this.applyService.saveDraft(_application);
  }

  onApplicationUpdated(application: CareerApplicationGet) {
    this.application.next(application);
  }

  getDocUploadStepStatus() {
    return this.docsUploadStepService.getStepStatus();
  }

  getPersonalInfoStepStatus() {
    return this.personalInfoStepService.getStepStatus();
  }

  getQuestionsStepStatus() {
    return this.questionsStepService.getStepStatus();
  }

  /**
   * Next page
   */
  onNextPage() {
    this.currentStep++;
    this.setActivePage();
  }

  /**
   * Previous Page
   */
  onPrevPage() {
    this.currentStep--;
    this.setActivePage();
  }

  /**
   * Sets active page
   */
  setActivePage() {
    switch (this.currentStep) {
      case 1:
        this.cvStepStatus = Status.active;
        this.questionsStepStatus = Status.pending;
        this.infoStepStatus = Status.pending;
        this.confirmationStepStatus = Status.pending;
        break;
      case 2:
        this.cvStepStatus = this.getDocUploadStepStatus();
        this.questionsStepStatus = Status.active;
        this.infoStepStatus = Status.pending;
        this.confirmationStepStatus = Status.pending;
        break;
      case 3:
        this.cvStepStatus = this.getDocUploadStepStatus();
        this.questionsStepStatus = this.getQuestionsStepStatus();
        this.infoStepStatus = Status.active;
        this.confirmationStepStatus = Status.pending;
        break;
      case 4:
        this.cvStepStatus = this.getDocUploadStepStatus();
        this.questionsStepStatus = this.getQuestionsStepStatus();
        this.infoStepStatus = this.getPersonalInfoStepStatus();
        this.confirmationStepStatus = Status.active;
        break;
      default:
        this.cvStepStatus = Status.active;
        this.infoStepStatus = Status.pending;
        this.questionsStepStatus = Status.pending;
        this.confirmationStepStatus = Status.pending;
    }
  }

  /**
   * Updates user profile - location details
   */
  private _updateUserProfileLocationDetails() {
    let profileUpdates: any = {};
    const personalInfoData = this.applyService.personalInfoStepData$.value;

    // current location
    if (personalInfoData.value.updateCurrentLocationToProfile && (personalInfoData.controls['currentCountry'].dirty || personalInfoData.controls['currentCity'].dirty)) {
      profileUpdates.country_current = personalInfoData.value.currentCountry.id;
      if (personalInfoData.value.currentCity.id) {
        profileUpdates.city_current = personalInfoData.value.currentCity.id;
        profileUpdates.city_custom_current = null;
      } else {
        profileUpdates.city_current = null;
        profileUpdates.city_custom_current = personalInfoData.value.currentCity;
      }
    }

    // if atleast one property has changed
    if (Object.keys(profileUpdates).length !== 0) {
      this.applyService.updateUserLocation(profileUpdates).subscribe((response) => {
        this.toastr.success('Successfully updated the profile');
      }, (err) => {
        this.toastr.error('Failed to update the profile', 'Profile update failed')
      });
    }
  }

  /**
   * Updates user profile - compensation/role etc.
   */
  private _updateUserProfileCredentials() {
    let profileUpdates: any = {};
    const personalInfoData = this.applyService.personalInfoStepData$.value;

    // current role
    if (personalInfoData.value.updateCurrentRoleToProfile && personalInfoData.controls['currentRole'].dirty) {
      profileUpdates.professional_title = personalInfoData.value.currentRole;
    }

    // current compensation
    if (personalInfoData.value.updateCurrentCompensationToProfile && (personalInfoData.controls['currentCurrency'].dirty || personalInfoData.controls['currentBase'].dirty || personalInfoData.controls['currentBenefits'].dirty)) {
      profileUpdates.compensation_currency_current = personalInfoData.value.currentCurrency.id;
      profileUpdates.compensation_base_current = personalInfoData.value.currentBase;
      profileUpdates.compensation_benefits_current = personalInfoData.value.currentBenefits;
    }

    // target compensation
    if (personalInfoData.value.updateTargetCompensationToProfile && (personalInfoData.controls['targetCurrency'].dirty || personalInfoData.controls['targetBase'].dirty || personalInfoData.controls['targetBenefits'].dirty)) {
      profileUpdates.compensation_currency_target = personalInfoData.value.targetCurrency.id;
      profileUpdates.compensation_base_target = personalInfoData.value.targetBase;
      profileUpdates.compensation_benefits_target = personalInfoData.value.targetBenefits;
    }

    // if atleast one property has changed
    if (Object.keys(profileUpdates).length !== 0) {
      this.applyService.updateUserCredentials(profileUpdates).subscribe((response) => {
        this.toastr.success('Successfully updated the profile');
      }, (err) => {
        this.toastr.error('Failed to update the profile', 'Profile update failed')
      });
    }
  }

  /**
   * Submits application
   * @param application 
   */
  private _submitApplication(application: CareerApplication) {
    this.applyService.submitApplication(application).subscribe((response) => {
      this.toastr.success('Submitted your application successfully', 'Application success');
      this.applyService.isSubmittingApplication$.next(false);
      this.applicationSubmitted.emit(true);
    }, (err) => {
      this.applyService.isSubmittingApplication$.next(false);
    });
  }

  /**
   * Gets application payload in format accepted by api
   */
  private _getApplicationPayload(): CareerApplication {
    let application = new CareerApplication();
    const personalInfoData = this.applyService.personalInfoStepData$.value;
    application.career = this.selectedCareerDetails.id;
    application.cv_file_name = this.applyService.docsUploadStepData$.value.cvAwsName;
    application.cover_letter_file_name = this.applyService.docsUploadStepData$.value.clAwsName;
    application.status_candidate = 2;
    application.status_candidate_date = new Date().toISOString().slice(0, 10);
    // application.status_candidate_note = '';
    application.compensation_currency_target = personalInfoData.value.targetCurrency.id.toString();
    application.compensation_base_target = personalInfoData.value.targetBase.toString();
    application.compensation_benefits_target = personalInfoData.value.targetBenefits.toString();
    application.compensation_currency_current = personalInfoData.value.currentCurrency.id.toString();
    application.compensation_base_current = personalInfoData.value.currentBase.toString();
    application.compensation_benefits_current = personalInfoData.value.currentBenefits.toString();
    application.compensation_notes = '';  // TODO: Do we need compensation notes?
    application.role_title_current = personalInfoData.value.currentRole;
    // application.role_summary_current = '';
    application.role_country_current = personalInfoData.value.currentCountry.id.toString();
    application.role_city_custom_current = personalInfoData.value.currentCity && personalInfoData.value.currentCity.id ? null : personalInfoData.value.currentCity;
    application.role_city_current = personalInfoData.value.currentCity && personalInfoData.value.currentCity.id ? personalInfoData.value.currentCity.id.toString() : null;
    application.role_country_target = personalInfoData.value.targetCountry.id.toString();
    application.role_city_custom_target = personalInfoData.value.targetCity && personalInfoData.value.targetCity.id ? null : personalInfoData.value.targetCity;
    application.role_city_target = personalInfoData.value.targetCity && personalInfoData.value.targetCity.id ? personalInfoData.value.targetCity.id.toString() : null;
    return application;
  }

  submit() {
    this.applied = true;
  }

  openCloseModal() {
    const modalRef = this.modalService.open(CareerApplyCancelModalComponent, { centered: true, size: 'lg' });
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EMPLOYEE_STATUS } from '../../applications-simplified/application-details/helpers/types/employee-status.const';
import { STAGES } from '../../applications-simplified/application-details/helpers/types/stages.const';
import { ApplicationsSimplifiedService } from '../../applications-simplified/applications-simplified.service';
import { SCORE_OPTIONS } from '../../applications/types/score-options.enum';
import { APPLICATION_STAGE } from '../../applications/types/stage.enum';
import { UserStatusUpdateComponent } from '../user-status-update/user-status-update.component';
import { ToastrService } from 'ngx-toastr';
import { APPLICATION_STAGES } from './../../applications-simplified/application-details/helpers/types/application_stages.const';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'mmb-org-app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
  employee: any;
  form: FormGroup;
  showTextarea: boolean = false;
  @Input() candidate;
  @Input() selectedApplication;
  @Input()
  set selectedStage(value) {
    this._selectedStage = value;
    this.employeeStatusOptions = this.getEmployeeStatusOptions(value);
  }
  employeeId: any;
  get selectedStage() {
    return this._selectedStage;
  }
  @Input() feedbacks;
  @Output() feedbackUpdated: EventEmitter<string> = new EventEmitter<string>();
  @Output() updated: EventEmitter<string> = new EventEmitter<string>();

  stageOptions: APPLICATION_STAGE[] = [APPLICATION_STAGE.Screening, APPLICATION_STAGE.Shortlist, APPLICATION_STAGE.Interview, APPLICATION_STAGE.FinalInterview, APPLICATION_STAGE.Offer];
  scoreOptions = SCORE_OPTIONS;
  employeeStatusOptions: APPLICATION_STAGE[];
  private _selectedStage;
  isUserActiveOverRating: boolean;
  stages = APPLICATION_STAGES;

  constructor(private dialog: MatDialog,
              private applicationsSimplifiedService: ApplicationsSimplifiedService,
              private fb: FormBuilder,
              private toastrService: ToastrService, 
              private _snackbar: MatSnackBar) { }

  ngOnInit() {
    this.employee = JSON.parse(localStorage.getItem('mmb.org.user'));

    this.form = this.fb.group({
      suitability: [null, Validators.required],
      feedbackPrivate: ['', Validators.required],
    });

    this.employeeId = this.employee.employees.filter(employee => employee.organisation === this.selectedApplication.career.organisation.id);
  }

  /**
   * Gets employee status options based on current stage
   */
  getEmployeeStatusOptions(currentStage: APPLICATION_STAGE): APPLICATION_STAGE[] {
    switch (currentStage) {
      case APPLICATION_STAGE.Screening:
        return [APPLICATION_STAGE.Shortlist, APPLICATION_STAGE.InterviewStart, APPLICATION_STAGE.ApplicationReject, APPLICATION_STAGE.ApplicationRedirect, APPLICATION_STAGE.ApplicationFurtherReview, APPLICATION_STAGE.ApplicationMoreInfo, APPLICATION_STAGE.ApplicationPause, APPLICATION_STAGE.ApplicationExpire];
      case APPLICATION_STAGE.Shortlist:
        return [APPLICATION_STAGE.InterviewStart, APPLICATION_STAGE.ApplicationExpire];
      case APPLICATION_STAGE.Interview:
        return [APPLICATION_STAGE.FinalInterview, APPLICATION_STAGE.InterviewProgress, APPLICATION_STAGE.InterviewReject, APPLICATION_STAGE.InterviewRedirect, APPLICATION_STAGE.InterviewPause, APPLICATION_STAGE.ApplicationExpire];
      case APPLICATION_STAGE.FinalInterview:
        return [APPLICATION_STAGE.FinalInterviewReject, APPLICATION_STAGE.FinalInterviewPause, APPLICATION_STAGE.FinalInterviewRedirect, APPLICATION_STAGE.ApplicationExpire];
      case APPLICATION_STAGE.Offer:
        return [APPLICATION_STAGE.OfferNegotiate, APPLICATION_STAGE.OfferWithdraw, APPLICATION_STAGE.OfferPause, APPLICATION_STAGE.ApplicationExpire];
      default:
        return [APPLICATION_STAGE.Screening, APPLICATION_STAGE.Shortlist, APPLICATION_STAGE.Interview, APPLICATION_STAGE.FinalInterview, APPLICATION_STAGE.Offer];
    }
  }

  /**
   * Employee status updated
   */
  onEmployeeStatusUpdated(ev) {
    const dialogRef = this.dialog.open(UserStatusUpdateComponent, {
      data: { item: { candidate: this.candidate }, previousStage: this.selectedStage, newStage: ev.value, isModalView: false },
      width: '60vw',
    });
  }

  setValue(value: any) {
    this.form.controls.suitability.setValue(value);
    this.showTextarea = true;
  }

  /**
   * Post user's feedback
   */
  postFeedback() {
    this.applicationsSimplifiedService.postFeedback(
      this.selectedApplication.id,
      this.form.controls.suitability.value,
      this.selectedApplication.stage,
      this.employeeId[0].id,
      this.form.controls.feedbackPrivate.value,
      ).subscribe(res => {
        this._snackbar.open('Suitability updated', 'Close', {
          duration: 2000
        });
        this.feedbackUpdated.emit();
        this.updated.emit();
        this.form.reset();
      }, (err) => {
        
      });
  }

  /**
   * Maps stages type from number
   * @param type value
   */
  getStage(type: number) {
    if (type) {
      return STAGES.filter((item) => {
        if (item.value === type.toString()) {
          return item.viewValue;
        }
      });
    }
  }

  /**
   * Maps stages type from number
   * @param type value
   */
  getStatus(type: number) {
    if (type) {
    return EMPLOYEE_STATUS.filter((item) => {
      if (item.value === type.toString()) {
        return item.viewValue;
      }
    });
  }
  }
}

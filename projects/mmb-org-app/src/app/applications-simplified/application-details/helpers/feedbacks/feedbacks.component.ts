import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationsSimplifiedService } from '../../../applications-simplified.service';
import { STAGES } from '../types/stages.const';
import { SUITABILITY_PROFILE } from '../types/suitability_profile.const';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatSnackBar } from '@angular/material';
import { EMPLOYEE_STATUS } from '../types/employee-status.const';
import { ADMIN_STATUS } from '../types/admin-status.const';
import { CANDIDATE_STATUS } from '../types/candidate-status.const';

@Component({
  selector: 'mmb-org-app-user-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserFeedbacksComponent implements OnInit {
  @Input() feedback;
  @Input() questions;
  @Input() activeFilter;
  @Input() isInterestedTabActive: boolean;
  @Output() feedbackUpdated: EventEmitter<string> = new EventEmitter<string>();
  feedbackNotes: string;
  isAddFeedbackEnabled: boolean = false;
  form: FormGroup;
  Editor = ClassicEditor;
  editorConfig = {
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'numberedList', 'bulletedList', 'indent', 'outdent', '|', 'undo', 'redo'],
  };

  constructor(private applicationsSimplifiedService: ApplicationsSimplifiedService,
    private fb: FormBuilder, private snackbar: MatSnackBar) { }

  ngOnInit() {
    let summaryNotes = this.feedback.employee_summary;
    if (this.isInterestedTabActive) {
      summaryNotes = this.feedback.notes_employee;
    }
    this.form = this.fb.group({
      comments: [this.feedback ? summaryNotes : '', Validators.required],
    });
  }

  /**
   * Adds comment
   */
  postComment() {
    if (this.isInterestedTabActive) {
      this.applicationsSimplifiedService.postGeneralCommentInterestedCandidate(this.feedback.uuid, this.feedback.career.id, this.form.controls.comments.value).subscribe(() => {
        this.snackbar.open('Saved the comment successfully!', 'Close', {
          duration: 2000
        })
      }, (err) => {
        this.snackbar.open('Unable to save the comment', 'Close', {
        })
      });
    } else {
      this.applicationsSimplifiedService.postGeneralComment(this.feedback.uuid, this.feedback.career.id, this.form.controls.comments.value).subscribe(() => {
        this.snackbar.open('Saved the comment successfully!', 'Close', {
          duration: 2000,
        })
      }, (err) => {
        this.snackbar.open('Unable to save the comment', 'Close', {
          panelClass: 'red'
        })
      });
    }
  }

  /**
   * Feedback update
   */
  updateFeedback(event: any) {
    this.feedbackUpdated.emit(event);
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
   * Maps status type from number
   * @param type value
   */
  getEmployeeStatus(type: number): any {
    if (type) {
      return EMPLOYEE_STATUS.find((item) => {
        if (item.value === type.toString()) {
          return item.viewValue;
        }
      });
    }
  }

  /**
   * Maps status type from number
   * @param type value
   */
  getAdminStatus(type: number): any {
    if (type) {
      return ADMIN_STATUS.find((item) => {
        if (item.value === type) {
          return item.viewValue;
        }
      });
    }
  }

  /**
   * Maps status type from number
   * @param type value
   */
  getCandidateStatus(type: number): any {
    if (type) {
      return CANDIDATE_STATUS.find((item) => {
        if (item.value === type) {
          return item.viewValue;
        }
      });
    }
  }

  /**
   * Maps sutability profile type from number
   * @param type value
   */
  getSuitability(type: number) {
    if (type) {
      return SUITABILITY_PROFILE.filter((item) => {
        if (item.value === type.toString()) {
          return item.viewValue;
        }
      });
    }
  }
}

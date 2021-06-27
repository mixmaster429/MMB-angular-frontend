import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APPLICATION_STAGE } from '../types/stage.enum';
import { SCORE_OPTIONS } from '../types/score-options.enum';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mmb-org-app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicationDetailComponent implements OnInit {
  searchCandidate: FormControl = new FormControl();
  public matDialogRef: MatDialogRef<ApplicationDetailComponent>;
  options = [{ value: 'cv', viewValue: 'Curriculum Vitae' }, { value: 'coverLetter', viewValue: 'Cover Letter' }];
  selectedOption: string = 'cv';
  stageOptions: APPLICATION_STAGE[] = [APPLICATION_STAGE.Screening, APPLICATION_STAGE.Shortlist, APPLICATION_STAGE.Interview, APPLICATION_STAGE.FinalInterview, APPLICATION_STAGE.Offer];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  /**
   * Returns url of PDF to be displayed
   */
  getPdfLink(option: string) {
    if (option === 'cv' && this.data && this.data.item && this.data.item.candidate) {
      return this.data.item.candidate.cv ? this.data.item.candidate.cv : '';
    } else if (option === 'coverLetter' && this.data && this.data.item && this.data.item.candidate) {
      return this.data.item.candidate.coverLetter ? this.data.item.candidate.coverLetter : '';
    } else {
      return '';
    }
  }

  /** 
   * Updates selected application - quick update from left scroll
   */
  updateSelectedApplication(application) {
    if (application && application.uuid) {
      this.data.item = application;
    }
  }
}

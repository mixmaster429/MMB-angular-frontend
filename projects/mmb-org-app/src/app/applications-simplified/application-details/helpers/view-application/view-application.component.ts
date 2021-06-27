import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardService } from 'ngx-clipboard';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { APPLICATION_STAGES } from '../types/application_stages.const';
import { EMPLOYEE_STATUS } from '../types/employee-status.const';

@Component({
  selector: 'mmb-org-app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.scss']
})
export class ViewApplicationComponent implements OnInit, AfterContentChecked {
  @Input() isApplicationsLoading: boolean;
  @Input() isLoadingMore: boolean;
  @Input() applicationUuidParam: string;
  @Input() selectedApplication;
  @Input() applications;
  @Input() career;
  @Input() isOpenedInModal: boolean;
  @Input() careerName: string;
  @Input() isApplicationLoading: boolean;
  @Input() filterTerm: string;
  @Input() activeFilter: any;
  @Input() isInterestedTabActive: boolean;
  @Output() selectedApplicationUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() feedbackUpdated: EventEmitter<string> = new EventEmitter<string>();
  @Output() updated: EventEmitter<string> = new EventEmitter<string>();
  @Output() scroll: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _clipboardService: ClipboardService, private _snackbar: MatSnackBar,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<ViewApplicationComponent>,
    private route: ActivatedRoute, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.data && this.data.selectedApplication) {
      this.selectedApplication = this.data.selectedApplication;
      this.careerName = this.data.careerName;
      this.isOpenedInModal = true;
    }
  }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  /**
   * Returns if CV is selected and value is assigned
   * @param tabGroup tab
   */
  checkIfCvAssigned(tabGroup) {
    return tabGroup.selectedIndex === 0 && this.selectedApplication.cv;
  }

  /**
   * Returns if cover letter is selected and value is assigned
   * @param tabGroup tab
   */
  checkIfCoverLetterAssigned(tabGroup) {
    return tabGroup.selectedIndex === 1 && this.selectedApplication.cover_letter_pdf;
  }

  /**
   * Updates selected application - quick update from left scroll
   */
  updateSelectedApplication(application) {
    this.selectedApplicationUpdated.emit(application);
  }

  /**
   * Copy the link to clipboard
   */
  onCopyLink() {
    let applicationUrl = location.href;
    if (applicationUrl.indexOf('/applications/') !== -1) {
      applicationUrl = applicationUrl.substring(0, applicationUrl.lastIndexOf('/'));
    }
    this._clipboardService.copy(`${applicationUrl}/${this.selectedApplication.uuid}`);
    this._snackbar.open('Copied to clipboard', 'Close', {
      duration: 1000
    });
  }

  updateFeedback(event: any) {
    this.feedbackUpdated.emit(event);
  }

  update() {
    this.updated.emit();
  }

  /**
   * Scroll event from infinite scroll
   */
  onScroll() {
    this.scroll.emit();
  }

  /**
   * Get stage name from stage id
   */
  getStageName(stage: number) {
    return APPLICATION_STAGES.find((item) => item.value === stage);
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
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationDetailComponent } from '../application-detail/application-detail.component';
import { APPLICATION_STAGE } from '../types/stage.enum';
import { FormControl } from '@angular/forms';
import { UserStatusUpdateComponent } from '../../shared/user-status-update/user-status-update.component';

@Component({
  selector: 'mmb-org-app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ApplicationsComponent implements OnInit {
  searchInput: FormControl = new FormControl();
  currentlyDraggedItem;
  applications = [
    {
      name: APPLICATION_STAGE.Screening,
      applications: [{
        uuid: '001',
        jobTitle: 'Senior Developer, London',
        applicationDate: '02-Apr-2020',
        stage: APPLICATION_STAGE.Screening,
        candidate: {
          name: 'Varun Goel',
          professionalTitle: 'Team Lead',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume.pdf',
          coverLetter: 'assets/pdf/sample-resume-2.pdf',
          employeeStatus: 1,
          employeeStatusDate: '28-Mar-2020',
          employeeNotes: '',
          stage: APPLICATION_STAGE.FinalInterview,
          stageData: '20 April 2020',
          stageNotes: 'Good candidate, good in development. Need to discuss about financial arrangement and visa',
          score: '2'
        },
        questions: [{
          title: 'Do you have any experience working/living in this city/country or with the region in general?',
          response: 'Yes'
        },
        {
          title: 'This role requires an understanding of East Africa, government, a passion for social impact and fluency in impact evaluation. Briefly tell us why you are suitable for the role?',
          response: 'Test response'
        }, {
          title: 'Please share your current salary range and any additional salary expectations or specific requirements',
          response: '$100,000 per annum'
        }, {
          title: 'Please specify any further questions you have or additional information you would like to include (optional)',
          response: 'No questions'
        }, {
          title: 'Please specify all passports, work permits, or country rights that you hold',
          response: 'India, Netherlands, US, Canada'
        }],
        application_employee_suitability_list: [{
          user: 'J. Doe',
          userImage: '',
          feedback_public: 'Candidate\'s profile looks good',
          suitability_profile_name: 'Fit',
          suitability_criteria_name: 'Fit',
          stage_name: 'Screening',
          feedback_private: 'Evaluate further with Charles',
          date: '05-Apr-2020'
        }, {
          user: 'T. Moody',
          userImage: '',
          feedback_public: 'Spoke to Varun, good candidate. Evaluate further',
          suitability_profile_name: 'Fit',
          suitability_criteria_name: 'Fit',
          stage_name: 'Interview',
          feedback_private: 'Need to give machine test',
          date: '01-Apr-2020'
        }]
      }, {
        uuid: '002',
        jobTitle: 'CEO, London',
        stage: APPLICATION_STAGE.Screening,
        candidate: {
          name: 'John Doe',
          professionalTitle: 'CEO',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume-2.pdf',
          coverLetter: 'assets/pdf/sample-resume.pdf'
        }
      }, {
        uuid: '003',
        jobTitle: 'Senior Developer, London',
        stage: APPLICATION_STAGE.Screening,
        candidate: {
          name: 'Varun Goel',
          professionalTitle: 'Team Lead',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume.pdf',
          coverLetter: 'assets/pdf/sample-resume-2.pdf'
        }
      }, {
        uuid: '004',
        jobTitle: 'CEO, London',
        stage: APPLICATION_STAGE.Screening,
        candidate: {
          name: 'John Doe',
          professionalTitle: 'CEO',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume-2.pdf',
          coverLetter: 'assets/pdf/sample-resume.pdf'
        }
      }, {
        uuid: '005',
        jobTitle: 'Senior Developer, London',
        stage: APPLICATION_STAGE.Screening,
        candidate: {
          name: 'Varun Goel',
          professionalTitle: 'Team Lead',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume.pdf',
          coverLetter: 'assets/pdf/sample-resume-2.pdf'
        }
      }, {
        uuid: '006',
        jobTitle: 'CEO, London',
        stage: APPLICATION_STAGE.Screening,
        candidate: {
          name: 'John Doe',
          professionalTitle: 'CEO',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume-2.pdf',
          coverLetter: 'assets/pdf/sample-resume.pdf'
        }
      }]
    },
    {
      name: APPLICATION_STAGE.Shortlist,
      applications: [{
        uuid: '007',
        jobTitle: 'Senior Developer, London',
        stage: APPLICATION_STAGE.Shortlist,
        candidate: {
          name: 'Varun Goel',
          professionalTitle: 'Team Lead',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume-2.pdf'
        }
      }, {
        uuid: '008',
        jobTitle: 'CEO, London',
        stage: APPLICATION_STAGE.Shortlist,
        candidate: {
          name: 'John Doe',
          professionalTitle: 'CEO',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume-2.pdf'
        }
      }]
    },
    {
      name: APPLICATION_STAGE.Interview,
      applications: [{
        uuid: '009',
        jobTitle: 'Senior Developer, London',
        stage: APPLICATION_STAGE.Interview,
        candidate: {
          name: 'Varun Goel',
          professionalTitle: 'Team Lead',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume-2.pdf'
        }
      }, {
        uuid: '010',
        jobTitle: 'CEO, London',
        stage: APPLICATION_STAGE.Interview,
        candidate: {
          name: 'John Doe',
          professionalTitle: 'CEO',
          skills: ['Angular', 'TypeScript', 'rxJS', 'ngRX', 'Agile'],
          cv: 'assets/pdf/sample-resume-2.pdf'
        }
      }]
    },
    {
      name: APPLICATION_STAGE.FinalInterview,
      applications: []
    },
    {
      name: APPLICATION_STAGE.Offer,
      applications: []
    },
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  /**
   * On selection of candidate - open detail dialog
   * @param item Candidate item
   */
  onCandidateSelected(item, list, selectedStage: string) {
    const dialogRef = this.dialog.open(ApplicationDetailComponent, {
      data: { item: item, list: list, selectedStage: selectedStage },
      width: '100vw',
      height: '100vh'
    });
  }

  /**
   * On drop of item
   */
  onDrop(event, stageName: string) {
    // Open modal to confirm
    if (this.currentlyDraggedItem.stage !== stageName) {
      const dialogRef = this.dialog.open(UserStatusUpdateComponent, {
        data: { item: this.currentlyDraggedItem, previousStage: this.currentlyDraggedItem.stage, newStage: stageName },
        width: '60vw',
      });
      // assign new stage
      this.currentlyDraggedItem.stage = stageName;
    }
  }

  /**
   * On dragging started
   * @param event drag event
   * @param stageName stage from which drag started
   */
  onDrag(event, stageName: string, item: any) {
    this.currentlyDraggedItem = item;
  }
}

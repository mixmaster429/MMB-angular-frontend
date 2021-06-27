import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ProjectDetails } from '../types/project-details.model';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUserToProjectComponent } from '../../shared/add-user-to-project/add-user-to-project.component';
import { SCORE_OPTIONS } from '../../shared/score-options.const';
import { User } from '../../shared/types/user.model';
import { ProjectCandidateOverview, ProjectCandidate } from './../types/project-candidate.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabGroup } from '@angular/material/tabs';
import { ConfirmationModalComponent } from '../../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'mmb-admin-app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProjectDetailsComponent implements OnInit {
  id: number;
  page: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  searchInput: FormControl;
  details: ProjectDetails;
  candidates: Observable<ProjectCandidateOverview[]>;
  dialogRef: MatDialogRef<AddUserToProjectComponent>;
  confirmationDialogRef: MatDialogRef<ConfirmationModalComponent>;
  projectUuid: string;
  scoreOptions = SCORE_OPTIONS;
  users: Observable<User[]> = of([]);
  userForm: FormGroup;
  DEBOUNCE_TIME = 1000;
  isLoading: boolean = false;
  @ViewChild('tabGroup', { static: true }) tabGroup: MatTabGroup;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _snackbar: MatSnackBar
  ) {
    this.searchInput = new FormControl('');
    this.userForm = this.createUserForm();
  }

  ngOnInit() {
    this.isLoading = true;
    this.candidates = this.route.params.pipe(
      map(p => p.uuid),
      tap(uuid => this.projectUuid = uuid),
      switchMap((uuid) => {
        return this.projectsService.getProjectDetails(uuid).pipe(
          switchMap(project => {
            this.details = project;
            this.isLoading = false;
            this.id = project.id;
            return this.projectsService.getProjectCandidates(project.id);
          })
        )
      })
    );
  }


  /**
   * Creates new project
   */
  addUserToProject() {
    this.dialogRef = this.matDialog.open(AddUserToProjectComponent, {
      panelClass: 'form-dialog',
      data: {
        action: 'new'
      }
    });

    this.dialogRef.componentInstance.isUsersPageActive = false;
    // this.dialogRef.componentInstance.projectId = this.projectUuid;

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        // this.details = this.projectsService.getProjectDetails(this.projectUuid);
      });
  }

  /**
   * Unassign the user from project
   * @param ev event data
   */
  onUnassignUser(projectCandidateUuid: string) {
    // show the dialog for confirmation
    this.confirmationDialogRef = this.matDialog.open(ConfirmationModalComponent, {
      panelClass: 'form-dialog'
    });

    this.confirmationDialogRef.componentInstance.projectCandidateUuid = projectCandidateUuid;
    this.confirmationDialogRef.afterClosed()
      .subscribe((response: string) => {
        if (response === 'success') {
          this.candidates = this.projectsService.getProjectCandidates(this.id);
        }
      });
  }


  /**
   * Saves user relevance details for the user
   * @param ev event data
   */
  onSaveUserRelevanceDetails(ev, candidate: ProjectCandidate) {
    this.projectsService.saveUserRelevanceDetails(candidate.uuid, ev.score, ev.notes).subscribe((resp) => {
      this._snackbar.open('Updated candidate details!', 'Close', {
        duration: 3000,
        panelClass: ['primary']
      });
    })
  }

  /**
   * Creates user form
   */
  private createUserForm() {
    return this._formBuilder.group({
      searchInput: ''
    });
  }

  /**
   * Infinite scroll
   */
  onScroll() {
    if (this.tabGroup.selectedIndex === 1) {
      this.page.next(this.page.value + 1);
    }
  }

  /**
   * Users list updated
   * @param ev event
   */
  onUsersListUpdated(ev) {
    this.candidates = this.projectsService.getProjectCandidates(this.id);
    this.page.next(1);
  }
}

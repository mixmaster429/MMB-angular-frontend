import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of, combineLatest } from 'rxjs';
import { startWith, map, switchMap, tap } from 'rxjs/operators';
import { User } from '../types/user.model';
import { SharedService } from '../shared.service';
import { Project } from '../types/project.model';
import { AddUserToProjectService } from './add-user-to-project.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SCORE_OPTIONS } from '../score-options.const';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'mmb-admin-app-add-user-to-project',
  templateUrl: './add-user-to-project.component.html',
  styleUrls: ['./add-user-to-project.component.scss']
})
export class AddUserToProjectComponent implements OnInit {
  @Input() isUsersPageActive: boolean = true;
  @Input() userId: number;
  @Input() projectId: number;
  @Input() selectedUsers: User[] = [];
  @Input() selectedProjects: Project[] = [];
  projectForm: FormGroup;
  users$: Observable<User[]>;
  users: User[];
  filteredUsers: Observable<User[]>;
  projects$: Observable<Project[]>;
  projects: Project[];
  filteredProjects: Observable<Project[]>;
  isLoading: boolean = false;
  isProjectsLoading: boolean = false;
  scoreOptions = SCORE_OPTIONS;

  constructor(
    public matDialogRef: MatDialogRef<AddUserToProjectComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder,
    private sharedService: SharedService,
    private addUserToProjectService: AddUserToProjectService,
    private _snackBar: MatSnackBar
  ) {
    this.projectForm = this.createProjectForm();
  }

  ngOnInit() {
    this.projectForm.controls['user'].valueChanges.pipe(
      tap((value: string) => {
        this.isLoading = true;
        if (value && typeof value === 'string') {
          this.users$ = this.sharedService.getUsersByQuery(value).pipe(
            map(values => {
              this.users = values;
              this.filteredUsers = of(values);
              this.isLoading = false;
              return values;
            })
          )
          this.users$.subscribe();
        } else {
          this.isLoading = false;
          this.filteredUsers = of();
        }
      })
    ).subscribe();

    // Get projects by search
    this.projectForm.controls['project'].valueChanges.pipe(
      tap((value: string) => {
        this.isProjectsLoading = true;
        if (value && typeof value === 'string') {
          this.projects$ = this.sharedService.getProjectsByQuery(value).pipe(
            map(values => {
              this.projects = values;
              this.filteredProjects = of(values);
              this.isProjectsLoading = false;
              return values;
            })
          )
          this.projects$.subscribe();
        } else {
          this.isProjectsLoading = false;
          this.filteredProjects = of();
        }
      })
    ).subscribe();
  }

  /**
   * Creates project form
   */
  createProjectForm(): FormGroup {
    return this._formBuilder.group({
      user: [''],
      project: [''],
      score: '',
      notes: '',
      projects: ''
    });
  }

  /**
   * Adds user to project
   */
  addUserToProject() {
    if (!this.selectedUsers || this.selectedUsers.length === 0) {
      this._snackBar.open('Please select atleast one user', 'Close', {
        duration: 3000,
        panelClass: ['primary']
      });
      return;
    }

    if (!this.selectedProjects || this.selectedProjects.length === 0) {
      this._snackBar.open('Please select atleast one project', 'Close', {
        duration: 3000,
        panelClass: ['primary']
      });
      return;
    }

    this.addUserToProjectService.addUsersToProjects(this.getSelectedUsers(), this.getSelectedProjects(),
      this.projectForm.controls['notes'].value, this.projectForm.controls['score'].value)
      .subscribe((val) => {
        this.projectForm.reset();
        this._snackBar.open('Successfully added!', 'Close', {
          duration: 3000,
          panelClass: ['primary']
        });

        this.matDialogRef.close('success');
      });
  }

  /**
   * Display function for dropdown
   * @param user user object
   */
  displayFn(user?: User): string | undefined {
    return user ? user._source.full_name : undefined;
  }

  /**
   * Sets selected user
   * @param value selected option
   */
  setSelectedUser(ev: MatCheckboxChange, value) {
    if (ev.checked) {
      this.selectedUsers.push(value);
    } else {
      this.removeSelectedUser(value);
    }
  }

  /**
   * Sets selected project
   * @param value selected option
   */
  setSelectedProject(ev: MatCheckboxChange, value) {
    if (ev.checked) {
      this.selectedProjects.push(value);
    } else {
      this.removeSelectedProject(value);
    }
  }

  /**
   * Toggles user selection
   * @param ev click event
   * @param user selected user
   */
  optionClicked(ev: Event, user) {
    event.stopPropagation();
  }

  /**
   * Remove selected user from the selected users list
   * @param user selected user
   */
  removeSelectedUser(user) {
    for (let index = 0; index < this.selectedUsers.length; index++) {
      if (user._id === this.selectedUsers[index]._id) {
        this.selectedUsers.splice(index, 1);
        break;
      }
    }
  }

  /**
   * Remove selected project from the selected projects list
   * @param project selected project
   */
  removeSelectedProject(project) {
    for (let index = 0; index < this.selectedProjects.length; index++) {
      if (project.uuid === this.selectedProjects[index].uuid) {
        this.selectedProjects.splice(index, 1);
        break;
      }
    }
  }

  /**
   * Gets selected users in API accepetd format
   */
  private getSelectedUsers() {
    let users = [];
    for (let user of this.selectedUsers) {
      let tempUser: any = {
        user_id: user._id
      };

      if (user._newScore) {
        tempUser.relevance = user._newScore;
      }

      if (user._newNotes) {
        tempUser.notes = user._newNotes;
      }

      users.push(tempUser);
    }
    return users;
  }

  /**
   * Gets selected projects in API accepted format
   */
  private getSelectedProjects() {
    let projects = [];
    for (let project of this.selectedProjects) {
      projects.push(project.id);
    }
    return projects;
  }

  /**
   * Converts value to viewvalue
   * @param value option value
   */
  getScoreOptionViewValue(value: string) {
    for (let item of this.scoreOptions) {
      if (item.value === value) {
        return <any>(item).viewValue;
      }
    }
    return null;
  }
}

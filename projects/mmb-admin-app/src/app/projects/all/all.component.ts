import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateComponent } from '../create/create.component';
import { Project } from '../../shared/types/project.model';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mmb-admin-app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AllComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'numberOfCandidates', 'owner', 'actions'];
  projects: Observable<Project[]> = this.projectsService.getSearchedProjects('');
  bufferProjects: Project[];
  dialogRef: any;
  searchInput: FormControl;
  DEBOUNCE_TIME = 1000;
  isLoading: boolean;

  constructor(
    private projectsService: ProjectsService,
    private _matDialog: MatDialog,
    private _snackbar: MatSnackBar
  ) {
    this.searchInput = new FormControl('');
  }

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(this.DEBOUNCE_TIME),
        distinctUntilChanged()
      ).subscribe((val) => {
        this.isLoading = true;

        this.projects = this.projectsService.getSearchedProjects(val).pipe(
          tap(val => {
            this.isLoading = false;
            this.bufferProjects = val;
          })
        );
      })
  }

  /**
   * Creates new project
   */
  createNewProject() {
    this.dialogRef = this._matDialog.open(CreateComponent, {
      panelClass: 'form-dialog',
      data: {
        action: 'new'
      }
    });

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }

        this.projectsService.createProject(response.getRawValue()).subscribe(() => {
          this._snackbar.open('Project created', 'Close', {
            duration: 3000,
            panelClass: ['primary']
          });
        });
      });
  }

  /**
   * Opens modal to edit the project
   */
  editProject(project: Project) {
    this.dialogRef = this._matDialog.open(CreateComponent, {
      panelClass: 'form-dialog',
      data: {
        action: 'edit',
        project: project
      }
    });

    this.dialogRef.afterClosed()
      .subscribe((response: string) => {
        if (!response) {
          return;
        }
      });
  }

  /**
   * Deletes selected project
   * @param project selected project
   */
  deleteProject(project) {
    this.projectsService.deleteProject(project.id).subscribe(() => {
      this._snackbar.open('Project deleted', 'Close', {
        duration: 3000,
        panelClass: ['primary']
      });
    });
  }
}

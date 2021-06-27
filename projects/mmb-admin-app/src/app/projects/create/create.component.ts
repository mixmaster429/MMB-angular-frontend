import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Project } from '../../shared/types/project.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from '../projects.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mmb-admin-app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  action: string;
  project: Project;
  projectForm: FormGroup;
  dialogTitle: string;
  isLoading: boolean;

  constructor(
    public matDialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder,
    private projectService: ProjectsService,
    private _snackbar: MatSnackBar
  ) {
    // Set the defaults
    this.action = _data.action;

    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Project';
      this.project = _data.project;
    }
    else {
      this.dialogTitle = 'New Project';
      this.project = new Project();
    }

    this.projectForm = this.createProjectForm();
  }

  ngOnInit() {
  }


  /**
   * Creates project form
   */
  createProjectForm(): FormGroup {
    return this._formBuilder.group({
      name: [this.project.name],
      description: [this.project.description]
    });
  }

  /**
   * Creates the project
   */
  createProject() {
    this.isLoading = true;
    const project: Project = {
      name: this.projectForm.controls['name'].value,
      description: this.projectForm.controls['description'].value
    };

    this.projectService.createProject(project).subscribe(() => {
      this._snackbar.open('Project created', 'Close', {
        duration: 3000,
        panelClass: ['primary']
      });
      this.isLoading = false;
      this.matDialogRef.close('success');
    });
  }

  /**
   * Updates the project
   */
  updateProject() {
    this.isLoading = true;
    const project: Project = {
      name: this.projectForm.controls['name'].value,
      description: this.projectForm.controls['description'].value
    };

    this.projectService.updateProject(this.project.uuid, project).subscribe(() => {
      this._snackbar.open('Project updated', 'Close', {
        duration: 3000,
        panelClass: ['primary']
      });
      this.isLoading = false;
      this.matDialogRef.close('success');
    });
  }
}

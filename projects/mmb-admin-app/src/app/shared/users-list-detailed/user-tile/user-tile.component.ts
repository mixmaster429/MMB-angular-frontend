import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../types/user.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUserToProjectComponent } from '../../add-user-to-project/add-user-to-project.component';
import { FormGroup } from '@angular/forms';
import { Project } from '../../types/project.model';

@Component({
  selector: 'mmb-admin-app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {
  @Input() projectCandidateRecordId: string;
  @Input() user: User;
  @Input() fullUser: User; // this is kept due to difference in user data between user and project candidate api
  @Input() isChecked: boolean;
  @Input() userId: string;
  @Input() projectId: number;
  @Input() project: Project;
  @Input() isUserAssignedScreenActive: boolean;
  @Output() selectionUpdated: EventEmitter<MatCheckboxChange> = new EventEmitter<MatCheckboxChange>();
  @Output() unassignUser: EventEmitter<string> = new EventEmitter<string>();
  @Output() usersListUpdated: EventEmitter<string> = new EventEmitter<string>();
  selectedProjects: Project[] = [];
  selectedUsers: User[] = [];
  private dialogRef: MatDialogRef<AddUserToProjectComponent>;

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  /**
   * Checkbox toggle for change event
   * @param ev event
   */
  onSelectionUpdated(ev: MatCheckboxChange) {
    this.isChecked = ev.checked;
    this.selectionUpdated.emit(ev);
  }

  /**
  * Creates new project
  */
  addUserToProject() {
    this.dialogRef = this.matDialog.open(AddUserToProjectComponent, {
      panelClass: 'form-dialog',
      width: '800px'
    });

    this.selectedUsers.push(this.fullUser);
    this.dialogRef.componentInstance.selectedUsers = this.selectedUsers;

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        this.selectedUsers = [];
      });
  }

  /**
   * Checks if user is assigned to project or not
   */
  isUserAssigned() {
    if (this.user.projects) {
      for (let item of this.user.projects) {
        if ((<any>item).project === this.projectId) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Removes user from project
   */
  removeUserFromProject() {
    this.unassignUser.emit(this.projectCandidateRecordId);
  }

  /**
   * Saves user to the selected project
   */
  saveToTheProject() {
    this.selectedUsers = [];
    this.selectedProjects = [];
    // Open modal with selected users
    this.dialogRef = this.matDialog.open(AddUserToProjectComponent, {
      panelClass: 'form-dialog',
      width: '800px'
    });
    this.selectedUsers.push(this.fullUser);
    this.selectedProjects.push(this.project);
    this.dialogRef.componentInstance.selectedProjects = this.selectedProjects;
    this.dialogRef.componentInstance.selectedUsers = this.selectedUsers;

    this.dialogRef.afterClosed().subscribe((response: string) => {
      if (response === 'success') {
        this.usersListUpdated.emit();
      }
    })
  }
}

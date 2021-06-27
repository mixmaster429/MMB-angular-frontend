import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mmb-admin-app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  projectCandidateUuid: string;
  constructor(
    private sharedService: SharedService, 
    private _snackbar: MatSnackBar,
    public matDialogRef: MatDialogRef<ConfirmationModalComponent>) { }

  ngOnInit() {
  }

  unassignUser() {
    this.sharedService.unassignUserFromProject(this.projectCandidateUuid).subscribe(() => {
      this._snackbar.open('Removed candidate from project!', 'Close', {
        duration: 3000,
        panelClass: ['primary']
      });
      this.matDialogRef.close('success');
    })
  }
}

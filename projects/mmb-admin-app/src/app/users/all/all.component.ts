import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormControl } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AddUserToProjectComponent } from '../../shared/add-user-to-project/add-user-to-project.component';
import { User } from '../../shared/types/user.model';
import { BehaviorSubject } from 'rxjs';
import { MmbFilter } from './../../shared/types/filter.model';

@Component({
  selector: 'mmb-admin-app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AllComponent implements OnInit {
  selectedUsers: User[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  searchInput: FormControl;
  dialogRef: MatDialogRef<AddUserToProjectComponent>;
  isLoading: boolean = false;
  isSelectAllEnabled: boolean = false;
  page: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  filter: BehaviorSubject<MmbFilter> = new BehaviorSubject<MmbFilter>(new MmbFilter());

  constructor(
    private _fuseSidebarService: FuseSidebarService,
    private matDialog: MatDialog,
  ) {
    // Set the defaults
    this.searchInput = new FormControl('');
  }

  ngOnInit() {
  }

  /**
     * Toggle sidebar
     *
     * @param name
     */
  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

  /**
   * Opens modal to save users to projects (many-to-many relation)
   */
  saveUsersToProjects() {
    if (!this.selectedUsers || !this.selectedUsers.length) {
      return;
    }
    // Open modal with selected users
    this.dialogRef = this.matDialog.open(AddUserToProjectComponent, {
      panelClass: 'form-dialog',
      width: '800px'
    });

    this.dialogRef.componentInstance.selectedUsers = this.selectedUsers;
  }

  onScroll() {
    // Trigger next set of data load
    this.page.next(this.page.value + 1);
  }

  /**
   * Update from child that selected users are updated
   * @param ev event data
   */
  onSelectedUsersUpdated(ev) {
    this.selectedUsers = ev;
  }

  /**
   * On filters updated
   * @param ev event data
   */
  onFiltersUpdated(ev) {
    let filter: MmbFilter = this.filter.value;
    // Apply filters
    if (ev.excellenceLevelFilter || ev.excellenceLevelFilter === '') {
      // Skill level updated
      filter.excellenceLevelFilter = ev.excellenceLevelFilter;
      this.filter.next(filter);
    }
  }
}

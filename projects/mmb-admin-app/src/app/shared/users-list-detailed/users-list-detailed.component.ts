import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../types/user.model';
import { SCORE_OPTIONS } from '../score-options.const';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Project } from '../types/project.model';

@Component({
  selector: 'mmb-admin-app-users-list-detailed',
  templateUrl: './users-list-detailed.component.html',
  styleUrls: ['./users-list-detailed.component.scss']
})
export class UsersListDetailedComponent implements OnInit {
  @Input() projectCandidateRecordId: string;
  @Input() user: User;
  @Input() project: Project;
  @Input() userId: string;
  @Input() projectId: number;
  @Input() score: string;
  @Input() notes: string;
  @Input() isChecked: boolean;
  @Input() isUserAssignedScreenActive: boolean;
  @Output() selectionUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() unassignUser: EventEmitter<string> = new EventEmitter<string>();
  @Output() saveUserRelevanceDetails: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() usersListUpdated: EventEmitter<string> = new EventEmitter<string>();

  scoreOptions = SCORE_OPTIONS;

  constructor(
  ) { }

  ngOnInit() {
  }

  /**
   * Checkbox toggle for change event
   * @param ev event
   */
  onSelectionUpdated(ev: MatCheckboxChange) {
    this.isChecked = ev.checked;
    this.selectionUpdated.emit(ev.checked);
  }

  /**
   * Unassign user from project
   * @param ev event
   */
  onUnassignUser(ev: string) {
    this.unassignUser.emit(ev);
  }

  /**
   * Saves user score and notes
   */
  onSaveUserRelevanceDetails() {
    this.saveUserRelevanceDetails.emit({
      score: this.score,
      notes: this.notes
    });
  }

  /**
   * Users list updated
   * @param ev event
   */
  onUserListUpdated(ev) {
    this.usersListUpdated.emit(ev);
  }
}

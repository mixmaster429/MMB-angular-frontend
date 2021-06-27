import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { User } from '../types/user.model';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UsersService } from '../../users/users.service';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Project } from '../types/project.model';
import { MmbFilter } from '../types/filter.model';

@Component({
  selector: 'mmb-admin-app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  // private _filter: MmbFilter;
  @Input() searchInput: FormControl;
  @Input() page: BehaviorSubject<number>;
  @Input() isSelectAllEnabled: boolean = false;
  @Input() isUserAssignedScreenActive: boolean = false;
  @Input() projectId: number;
  @Input() project: Project;
  @Input() filter: BehaviorSubject<MmbFilter> = new BehaviorSubject<MmbFilter>(new MmbFilter());
  // @Input()
  // set filter(val: MmbFilter) {
  //   this._filter = val;
  //   // update the filter
  //   debugger
  //   this.users$ = this.usersService.getSearchedUsers(this.searchInput.value, 1, this._filter).pipe(
  //     tap((val: any) => {
  //       this.isLoading = false;
  //       this.users = val.hits;
  //       this.bufferUsers = val;
  //     })
  //   );
  //   this.users$.subscribe();
  // }
  // get filter() {
  //   return this._filter;
  // }

  @Output() selectedUsersUpdated: EventEmitter<User[]> = new EventEmitter<User[]>();
  @Output() usersListUpdated: EventEmitter<string> = new EventEmitter<string>();

  selectedUsers: User[] = [];
  totalHits: number;
  users: User[];
  bufferUsers: User[];
  users$: Observable<User[]>;
  nextItems$: Observable<User[]>;
  isLoading: boolean = false;
  DEBOUNCE_TIME = 1000;

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getSearchedUsers('').pipe(
      tap((resp: any) => {
        this.users = resp.hits;
        this.totalHits = resp.total;
      })
    );
    this.users$.subscribe();
  }

  ngOnInit() {
    combineLatest(this.filter).subscribe(([filter]) => {
      this.isLoading = true;
      this.page.next(1);
      this.users$ = this.usersService.getSearchedUsers(this.searchInput.value, 1, filter).pipe(
        tap((val: any) => {
          this.isLoading = false;
          this.users = val.hits;
          this.bufferUsers = val;
        })
      );
      this.users$.subscribe();
    })

    // When page is changed, update the nextitems to be buffered
    combineLatest(this.page).subscribe(() => {
      // this.isLoading = true;
      if (this.page.value > 1) {
        this.nextItems$ = this.usersService.getSearchedUsers(this.searchInput.value, this.page.value, this.filter.value);
        this.nextItems$.subscribe((resp: any) => {
          if (resp && resp.hits) {
            this.users.push(...resp.hits);
          }
        });
      }
    });

    this.searchInput.valueChanges
      .pipe(
        debounceTime(this.DEBOUNCE_TIME),
        distinctUntilChanged()
      ).subscribe((val) => {
        this.isLoading = true;
        this.page.next(1);
        this.users$ = this.usersService.getSearchedUsers(val, 1, this.filter.value).pipe(
          tap((val: any) => {
            this.isLoading = false;
            this.users = val.hits;
            this.bufferUsers = val;
          })
        );
        this.users$.subscribe();
      })
  }

  /**
   * Updates selection toggle in user object
   * @param val new value
   * @param user user object
   */
  onUserSelectionUpdated(val: boolean, user: User) {
    user.isChecked = val;
    if (val) {
      // push the user as selected
      this.selectedUsers.push(user);
    } else {
      // pop the user from selected list
      for (let index = 0; index < this.selectedUsers.length; index++) {
        if (this.selectedUsers[index]._id === user._id) {
          this.selectedUsers.splice(index, 1);
        }
      }
    }
    this.onSelectedUsersUpdated();
  }

  /**
   * Toggles selection of select/deselect all
   * @param ev selection checkbox event
   */
  toggleSelectAll(ev: MatCheckboxChange) {
    this.isSelectAllEnabled = ev.checked;

    if (this.isSelectAllEnabled) {
      this.selectedUsers = this.users;
    } else {
      this.selectedUsers = [];
    }

    this.onSelectedUsersUpdated();
  }

  /**
   * Emit the event to update the change in selected users
   */
  onSelectedUsersUpdated() {
    this.selectedUsersUpdated.emit(this.selectedUsers);
  }

  /**
   * Users list updated
   * @param ev event
   */
  onUsersListUpdated(ev) {
    this.usersListUpdated.emit(ev);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mmb-admin-app-search-assigned-users',
  templateUrl: './search-assigned-users.component.html',
  styleUrls: ['./search-assigned-users.component.scss']
})
export class SearchAssignedUsersComponent implements OnInit {
  @Input() searchInput: FormControl;
  constructor() { }

  ngOnInit() {
  }

}

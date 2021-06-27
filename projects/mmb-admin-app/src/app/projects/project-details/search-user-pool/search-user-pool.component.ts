import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mmb-admin-app-search-user-pool',
  templateUrl: './search-user-pool.component.html',
  styleUrls: ['./search-user-pool.component.scss']
})
export class SearchUserPoolComponent implements OnInit {
  @Input() searchInput: FormControl;
  constructor() { }

  ngOnInit() {
  }

}

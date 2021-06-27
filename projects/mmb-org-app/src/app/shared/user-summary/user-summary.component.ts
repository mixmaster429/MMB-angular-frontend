import { Component, OnInit, Input } from '@angular/core';
import { User } from '../types/user.model';

@Component({
  selector: 'mmb-org-app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.scss']
})
export class UserSummaryComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}

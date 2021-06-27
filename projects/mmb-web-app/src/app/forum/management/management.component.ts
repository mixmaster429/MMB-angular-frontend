import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mmb-web-app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  ownerId: string = 'varun.goel';
  constructor() { }

  ngOnInit() {
  }

}

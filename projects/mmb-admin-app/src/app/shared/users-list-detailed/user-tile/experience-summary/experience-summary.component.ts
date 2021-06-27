import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-admin-app-experience-summary',
  templateUrl: './experience-summary.component.html',
  styleUrls: ['./experience-summary.component.scss']
})
export class ExperienceSummaryComponent implements OnInit {
  @Input() experiences = [];

  constructor() { }

  ngOnInit() {
  }

}

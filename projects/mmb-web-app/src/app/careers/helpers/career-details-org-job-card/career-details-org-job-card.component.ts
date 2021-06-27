import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-details-org-job-card',
  templateUrl: './career-details-org-job-card.component.html',
  styleUrls: ['./career-details-org-job-card.component.scss']
})
export class CareerDetailsOrgJobCardComponent implements OnInit {
  @Input() career: Career;
  constructor() { }

  ngOnInit() {
  }

}

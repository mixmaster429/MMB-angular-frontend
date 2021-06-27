import { Component, OnInit, Input } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-job-summary',
  templateUrl: './job-summary.component.html',
  styleUrls: ['./job-summary.component.scss']
})
export class JobSummaryComponent implements OnInit {
  @Input() career: Career;
  
  constructor() { }

  ngOnInit() {
  }

}

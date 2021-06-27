import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-industry-functions-section',
  templateUrl: './career-industry-functions-section.component.html',
  styleUrls: ['./career-industry-functions-section.component.scss']
})
export class CareerIndustryFunctionsSectionComponent implements OnInit {
  @Input() career: Career;
  constructor() { }

  ngOnInit() {
  }

}

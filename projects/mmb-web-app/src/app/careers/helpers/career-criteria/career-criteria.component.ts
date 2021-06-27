import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-criteria',
  templateUrl: './career-criteria.component.html',
  styleUrls: ['./career-criteria.component.scss']
})
export class CareerCriteriaComponent implements OnInit {
  @Input() career: Career;

  constructor() { }

  ngOnInit() {
  }

}

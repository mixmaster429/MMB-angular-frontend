import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-benefits',
  templateUrl: './career-benefits.component.html',
  styleUrls: ['./career-benefits.component.scss']
})
export class CareerBenefitsComponent implements OnInit {
  @Input() career: Career;

  constructor() { }

  ngOnInit() {
  }

}

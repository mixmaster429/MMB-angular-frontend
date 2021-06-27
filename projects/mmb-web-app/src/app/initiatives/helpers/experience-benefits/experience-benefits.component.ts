import { Component, Input, OnInit } from '@angular/core';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-benefits',
  templateUrl: './experience-benefits.component.html',
  styleUrls: ['./experience-benefits.component.scss']
})
export class ExperienceBenefitsComponent implements OnInit {
  @Input() experience: Initiative;
  constructor() { }

  ngOnInit() {
  }

}

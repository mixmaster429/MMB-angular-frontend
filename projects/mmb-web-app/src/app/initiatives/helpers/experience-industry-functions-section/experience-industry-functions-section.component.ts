import { Component, Input, OnInit } from '@angular/core';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-industry-functions-section',
  templateUrl: './experience-industry-functions-section.component.html',
  styleUrls: ['./experience-industry-functions-section.component.scss']
})
export class ExperienceIndustryFunctionsSectionComponent implements OnInit {
  @Input() experience: Initiative;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-locations-section',
  templateUrl: './experience-locations-section.component.html',
  styleUrls: ['./experience-locations-section.component.scss']
})
export class ExperienceLocationsSectionComponent implements OnInit {
  @Input() experience: Initiative;
  constructor() { }

  ngOnInit() {
  }

}

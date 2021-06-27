import { Component, Input, OnInit } from '@angular/core';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-details-org-experience-card',
  templateUrl: './experience-details-org-experience-card.component.html',
  styleUrls: ['./experience-details-org-experience-card.component.scss']
})
export class ExperienceDetailsOrgExperienceCardComponent implements OnInit {
  @Input() experience: Initiative;
  constructor() { }

  ngOnInit() {
  }

}

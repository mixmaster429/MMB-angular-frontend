import { Component, Input, OnInit } from '@angular/core';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-skills-section',
  templateUrl: './experience-skills-section.component.html',
  styleUrls: ['./experience-skills-section.component.scss']
})
export class ExperienceSkillsSectionComponent implements OnInit {
  @Input() experience: Initiative;
  constructor() { }

  ngOnInit() {
  }

}

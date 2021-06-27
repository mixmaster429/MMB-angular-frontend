import { Component, Input, OnInit } from '@angular/core';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-description-roles',
  templateUrl: './experience-description-roles.component.html',
  styleUrls: ['./experience-description-roles.component.scss']
})
export class ExperienceDescriptionRolesComponent implements OnInit {
  @Input() experience: Initiative;
  constructor() { }

  ngOnInit() {
  }

}

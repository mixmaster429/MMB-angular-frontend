import { Component, Input, OnInit } from '@angular/core';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-criteria',
  templateUrl: './experience-criteria.component.html',
  styleUrls: ['./experience-criteria.component.scss']
})
export class ExperienceCriteriaComponent implements OnInit {
  @Input() experience: Initiative;
  constructor() { }

  ngOnInit() {
  }

}

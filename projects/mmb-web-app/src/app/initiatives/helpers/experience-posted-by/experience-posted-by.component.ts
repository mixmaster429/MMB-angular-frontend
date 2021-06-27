import { Component, Input, OnInit } from '@angular/core';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-posted-by',
  templateUrl: './experience-posted-by.component.html',
  styleUrls: ['./experience-posted-by.component.scss']
})
export class ExperiencePostedByComponent implements OnInit {
  @Input() experience: Initiative;
  constructor() { }

  ngOnInit() {
  }

}

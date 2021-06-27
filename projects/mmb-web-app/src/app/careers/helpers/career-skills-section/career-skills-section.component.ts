import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-skills-section',
  templateUrl: './career-skills-section.component.html',
  styleUrls: ['./career-skills-section.component.scss']
})
export class CareerSkillsSectionComponent implements OnInit {
  @Input() career: Career;
  
  constructor() { }

  ngOnInit() {
  }

}

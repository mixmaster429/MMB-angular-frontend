import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-locations-section',
  templateUrl: './career-locations-section.component.html',
  styleUrls: ['./career-locations-section.component.scss']
})
export class CareerLocationsSectionComponent implements OnInit {
  @Input() career: Career;
  constructor() { }

  ngOnInit() {
  }

}

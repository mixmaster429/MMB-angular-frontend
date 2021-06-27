import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-description-roles',
  templateUrl: './career-description-roles.component.html',
  styleUrls: ['./career-description-roles.component.scss']
})
export class CareerDescriptionRolesComponent implements OnInit {
  @Input() career: Career;

  constructor() { }

  ngOnInit() {
  }

}

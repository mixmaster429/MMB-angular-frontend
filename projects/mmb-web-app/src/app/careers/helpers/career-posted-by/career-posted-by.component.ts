import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-posted-by',
  templateUrl: './career-posted-by.component.html',
  styleUrls: ['./career-posted-by.component.scss']
})
export class CareerPostedByComponent implements OnInit {
  @Input() career: Career;
  constructor() { }

  ngOnInit() {
  }

}

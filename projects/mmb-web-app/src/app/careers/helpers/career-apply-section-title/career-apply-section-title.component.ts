import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mmb-web-app-career-apply-section-title',
  templateUrl: './career-apply-section-title.component.html',
  styleUrls: ['./career-apply-section-title.component.scss']
})
export class CareerApplySectionTitleComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle?: string;
  @Input() step: string;

  constructor() { }

  ngOnInit() {
  }

}

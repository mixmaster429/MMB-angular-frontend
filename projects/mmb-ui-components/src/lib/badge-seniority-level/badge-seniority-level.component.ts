import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-ui-badge-seniority-level',
  templateUrl: './badge-seniority-level.component.html',
  styleUrls: ['./badge-seniority-level.component.scss']
})
export class BadgeSeniorityLevelComponent implements OnInit {
  @Input() name: string;
  @Input() value: number;
  constructor() { }

  ngOnInit() {
  }

}

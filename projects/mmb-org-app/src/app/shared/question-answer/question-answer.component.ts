import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-org-app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  @Input() questions;
  constructor() { }

  ngOnInit() {
  }

}

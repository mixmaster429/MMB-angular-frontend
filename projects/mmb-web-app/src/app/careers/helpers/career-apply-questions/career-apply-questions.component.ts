import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-apply-questions',
  templateUrl: './career-apply-questions.component.html',
  styleUrls: ['./career-apply-questions.component.scss']
})
export class CareerApplyQuestionsComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() details: Career;
  @Input() isDisabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}

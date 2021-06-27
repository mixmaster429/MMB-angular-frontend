import { Component, OnInit, Input } from '@angular/core';
import { QuestionsStepService } from './questions.service';
import { Status } from '../apply.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApplyCareerService } from '../apply.service';

@Component({
  selector: 'mmb-web-app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Input() application;
  _questions;
  @Input()
  public set questions(questions: string) {
    this._questions = questions;
    this.createQuestionsForm();
  }

  questionsForm = this.fb.group({});

  constructor(private fb: FormBuilder, private questionsStepService: QuestionsStepService,
    private applyService: ApplyCareerService) {
    this.questionsStepService.status = Status.error;
  }

  ngOnInit() {
  }

  /**
   * Creates questions form
   */
  createQuestionsForm() {
    let i = 0;
    for (let question of this._questions) {
      const control: FormControl = new FormControl('');
      if (question.mandatory) {
        control.setValidators(Validators.required);
      }
      this.questionsForm.setControl(`question-${i}`, control);
      i++;
    }

    // set questions step data
    this.applyService.setQuestionsStepData({
      questions: this._questions,
      questionForm: this.questionsForm
    });

    // Subscribe to value changes
    this.questionsForm.valueChanges.subscribe(() => {
      this.applyService.setQuestionsStepData({
        questions: this._questions,
        questionForm: this.questionsForm
      });
      this.questionsStepService.status = this.questionsForm.valid ? Status.done : Status.error;
    });
  }
}

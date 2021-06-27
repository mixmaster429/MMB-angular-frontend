import { Component, OnInit } from '@angular/core';
import { ApplyCareerService } from '../apply.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mmb-web-app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  docsUploadStepData: any;
  questionsStepData: any;
  personalInfoStepData: any;
  isSubmittingApplication$: BehaviorSubject<boolean> = this.applyService.isSubmittingApplication$;

  constructor(
    private applyService: ApplyCareerService) { }

  ngOnInit() {
    // get docs step status and data
    this._getStepsUploadStepData();
  }

  getAnswer(i: number) {
    return this.questionsStepData.questionForm.value[`question-${i}`];
  }

  /**
    * Initially binds the string value and then after selecting
    * an item by checking either for string or key/value object.
  */
  getPlaceValue(value: any) {
    if (value.name_ascii) {
      return value.name_ascii;
    }
    if (value.name) {
      return value.name;
    }
    return value;
  }

  /**
    * Initially binds the string value and then after selecting
    * an item by checking either for string or key/value object.
  */
  getCurrencyValue(value: any) {
    if (value && value.name) {
      return value.name;
    }
    return value;
  }

  /**
   * Gets document upload step data
   */
  private _getStepsUploadStepData() {
    this.applyService.docsUploadStepData$.subscribe((value) => {
      this.docsUploadStepData = value;
    });

    this.applyService.questionsStepData$.subscribe((value) => {
      this.questionsStepData = value;
    });

    this.applyService.personalInfoStepData$.subscribe((value) => {
      this.personalInfoStepData = value;
    });
  }

}

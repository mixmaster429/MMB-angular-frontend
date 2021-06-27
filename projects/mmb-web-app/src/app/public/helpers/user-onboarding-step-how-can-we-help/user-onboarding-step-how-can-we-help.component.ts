import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ONBOARDING_AREAS_OF_INTEREST } from '../../types/onboarding-areas-of-interest.const';

@Component({
  selector: 'mmb-web-app-user-onboarding-step-how-can-we-help',
  templateUrl: './user-onboarding-step-how-can-we-help.component.html',
  styleUrls: ['./user-onboarding-step-how-can-we-help.component.scss']
})
export class UserOnboardingStepHowCanWeHelpComponent implements OnInit {
  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();
  private _form: FormGroup;

  @Input()
  set form(value: FormGroup) {
    this._form = value;
    // get options and create checkboxes
    const checkboxes = <FormArray>this.form.get('areasOfInterest');
    if (!checkboxes.controls.length) {
      this.areasOfInterest.forEach((option: any) => {
        checkboxes.push(new FormControl(false));
    });
    }
  }

  get form(): FormGroup {
    return this._form;
  }

  isSomethingElseActive: boolean;
  otherText: string;
  areasOfInterest = ONBOARDING_AREAS_OF_INTEREST;

  constructor() { }

  ngOnInit() {
  }

  /**
   * on next step clicked
   */
  onNextStep() {
    this.next.emit();
  }

  /**
   * on back step clicked
   */
  onBackStep() {
    this.back.emit();
  }

  /**
   * Checkbox toggle for custom area of interest
   */
  onCustomAreaOfInterestToggle(ev) {
    this.isSomethingElseActive = ev.currentTarget.checked;
  }
}

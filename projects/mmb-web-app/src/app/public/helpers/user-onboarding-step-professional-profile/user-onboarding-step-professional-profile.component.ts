import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mmb-web-app-user-onboarding-step-professional-profile',
  templateUrl: './user-onboarding-step-professional-profile.component.html',
  styleUrls: ['./user-onboarding-step-professional-profile.component.scss']
})
export class UserOnboardingStepProfessionalProfileComponent implements OnInit {
  private _form: FormGroup;

  @Input()
  set form(value: FormGroup) {
    this._form = value;
    // set value if, received
  }

  get form(): FormGroup {
    return this._form;
  }
  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();

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
}

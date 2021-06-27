import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ONBOARDING_PERSONAS } from '../../types/onboarding-personas.const';

@Component({
  selector: 'mmb-web-app-user-onboarding-step-describe-yourself',
  templateUrl: './user-onboarding-step-describe-yourself.component.html',
  styleUrls: ['./user-onboarding-step-describe-yourself.component.scss']
})
export class UserOnboardingStepDescribeYourselfComponent implements OnInit {
  private _form: FormGroup;

  @Input()
  set form(value: FormGroup) {
    this._form = value;
    if (this._form.controls['persona']) {
      this.persona = this._form.controls['persona'].value;
    }
  }

  get form(): FormGroup {
    return this._form;
  }

  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  persona: number;
  options: { value: number, viewValue: string, image: string }[] = ONBOARDING_PERSONAS;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * on next step clicked
   */
  onNextStep() {
    if (!this.persona) {
      this.toastr.error('Please select one of the persona that applies to you the most', 'Error');
      return;
    }
    this.next.emit();
  }

  /**
   * Sets the persona
   * @param persona
   */
  onSetPersona(persona: { value: number, viewValue: string }) {
    this.persona = persona.value;
    this.form.controls['persona'].setValue(persona.value);
  }
}

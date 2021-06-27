import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mmb-web-app-user-onboarding-step-user-support',
  templateUrl: './user-onboarding-step-user-support.component.html',
  styleUrls: ['./user-onboarding-step-user-support.component.scss']
})
export class UserOnboardingStepUserSupportComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();
  MAX_ALLOWED_ROWS: number = 3;
  userSupportItems: string[] = [''];
  userHelpItems: string[] = [''];

  getUserSupportItemsFormKey(): FormControl {
    return <FormControl>this.form.controls['userNeedsSupportOn'];
  }

  getUserHelpItemsFormKey(): FormControl {
    return <FormControl>this.form.controls['userNeedsHelpOn'];
  }

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
   * Add support item row
   */
  onAddSupportItem(items: string[]) {
    if (items.length < this.MAX_ALLOWED_ROWS) {
      this.userSupportItems.push('');
    }
  }

  /**
   * Remove support item
   * @param i index to be removed
   */
  onRemoveSupportItem(index: number, items: string[]) {
    this.userSupportItems.splice(index, 1);
  }

  /**
   * Add help item row
   */
  onAddHelpItem(items: string[]) {
    if (items.length < this.MAX_ALLOWED_ROWS) {
      this.userHelpItems.push('');
    }
  }

  /**
   * Remove help item
   * @param i index to be removed
   */
  onRemoveHelpItem(index: number, items: string[]) {
    this.userHelpItems.splice(index, 1);
  }
}

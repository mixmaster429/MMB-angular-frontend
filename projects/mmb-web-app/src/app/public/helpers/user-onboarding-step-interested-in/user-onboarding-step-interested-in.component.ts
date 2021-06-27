import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ONBOARDING_CATEGORIES_OF_INTEREST } from '../../types/onboarding-categories-of-interest.const';

const MIN_AREAS: number = 5;

@Component({
  selector: 'mmb-web-app-user-onboarding-step-interested-in',
  templateUrl: './user-onboarding-step-interested-in.component.html',
  styleUrls: ['./user-onboarding-step-interested-in.component.scss']
})
export class UserOnboardingStepInterestedInComponent implements OnInit {
  private _form: FormGroup;
  minSelection: number = MIN_AREAS;
  @Input()
  set form(value: FormGroup) {
    this._form = value;
    if (this._form.controls['areasInterestedIn']) {
      this.areasInterestedIn = this._form.controls['areasInterestedIn'].value;
    }
  }

  get form(): FormGroup {
    return this._form;
  }

  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();

  areasInterestedIn: number[] = [];
  options: { value: number, viewValue: string, image: string }[] = ONBOARDING_CATEGORIES_OF_INTEREST;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * on next step clicked
   */
  onNextStep() {
    if (this.areasInterestedIn.length < MIN_AREAS) {
      this.toastr.error('Please Select 5 or more areas that interest you', 'Error');
      return;
    }
    this.next.emit();
  }

  /**
   * on back step clicked
   */
  onBackStep() {
    this.back.emit();
  }

  /**
   * Selected the area
   * @param area
   */
  onAreaSelected(area: { value: number, viewValue: string }) {
    // check if area already exists, then remove it
    let areaIndex: number = this.areasInterestedIn.indexOf(area.value);
    if (areaIndex !== -1) {
      // remove it
      this.areasInterestedIn.splice(areaIndex, 1);
      return;
    }

    // otherwise add it
    this.areasInterestedIn.push(area.value);
    this.form.controls['areasInterestedIn'].setValue(this.areasInterestedIn);
  }

  /**
   * Returns if area is selected
   * @param area 
   */
  isAreaSelected(area: { value: number, viewValue: string }) {
    return this.areasInterestedIn.includes(area.value);
  }
}

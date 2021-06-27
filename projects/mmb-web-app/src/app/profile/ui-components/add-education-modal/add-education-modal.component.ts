import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from '../../profile.service';
import { Education } from '../../types/helpers/education.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../types/user.model';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { SharedService } from '../../../shared/shared.service';
import { ConfirmRemoveModalComponent } from '../confirm-remove-modal/confirm-remove-modal.component';

@Component({
  selector: 'mmb-web-app-add-education-modal',
  templateUrl: './add-education-modal.component.html',
  styleUrls: ['./add-education-modal.component.scss']
})
export class AddEducationModalComponent implements OnInit {

  @Input() user: User;
  @Input() educations: Education;
  @Input() isEditMode: boolean;
  @Input() removeEducationMode: boolean;
  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();
  currentOrganisationSearch: any;
  isSearching: boolean = false;

  editProfileForm: FormGroup;

  constructor(private fb: FormBuilder,
              private profileService: ProfileService,
              public modal: NgbActiveModal,
              private toastr: ToastrService,
              private sharedService: SharedService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.editProfileForm = this.fb.group({
      school: [this.educations ? this.educations.organisation : '', Validators.required],
      field: [this.educations ? this.educations.field_of_study : '', Validators.required],
      startDate: [this.educations ? this.educations.start_date : '', Validators.required],
      endDate: [this.educations ? this.educations.end_date : '', Validators.required],
      description: [this.educations ? this.educations.notes : '', Validators.required],
    });

    this._subscribeToCurrentOrganisationValueChanges();
  }

  /**
   * subscribes to value changes of current organisation
   */
  private _subscribeToCurrentOrganisationValueChanges() {
    const currentOrganisationControl = this.editProfileForm.controls['school'];

    this.currentOrganisationSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term =>
          this.sharedService.getSchools(currentOrganisationControl.value)
        ),
        tap(() => this.isSearching = false)
      );
  }

 /**
  * Used to format the result data from the lookup into the
  * display and list values. Maps `{name: "organisation", id:"id" }` into a string
  */
 resultFormatOrganisationValue(value: any) {
  if (value.name_ascii) {
    return value.name_ascii;
  }
  return value.name;
}

 /**
  * Initially binds the string value and then after selecting
  * an item by checking either for string or key/value object.
  */
 inputFormatOrganisationValue(value: any) {
  if (value.name_ascii) {
    return value.name_ascii;
  }
  if (value.name) {
    return value.name;
  }
  return value;
}

  /**
   * Try to create education
   */
  createEducation() {
    this.profileService.addUserEducation(this.editProfileForm.controls['school'].value.id,
        this.editProfileForm.controls['field'].value,
        this.editProfileForm.controls['description'].value,
        this.editProfileForm.controls['startDate'].value,
        this.editProfileForm.controls['endDate'].value)
      .subscribe((response: Education) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success('Added education!');
      });
  }

  /**
   * Try to create education
   */
  editEducation() {
    this.profileService.editUserEducation(this.educations.uuid,
        this.editProfileForm.controls['school'].value.id,
        this.editProfileForm.controls['field'].value,
        this.editProfileForm.controls['description'].value,
        this.editProfileForm.controls['startDate'].value,
        this.editProfileForm.controls['endDate'].value)
      .subscribe((response: Education) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success('Updated education!');
      });
  }

  /**
   * Try to delete education
   */
  deleteEducation() {
    const modalRef = this.modalService.open(ConfirmRemoveModalComponent, { centered: true });
    modalRef.componentInstance.educations = this.educations;
    modalRef.componentInstance.removeEducationMode = true;
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.addSuccess.emit();
      this.closeModal();
    });
  }

  closeModal() {
    this.modal.dismiss();
  }
}

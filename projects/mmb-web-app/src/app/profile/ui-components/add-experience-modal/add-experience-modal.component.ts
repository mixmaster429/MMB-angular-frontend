import { ProfileService } from './../../profile.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experience } from '../../types/helpers/experience.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserDetails } from '../../types/helpers/user-details.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../types/user.model';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { SharedService } from '../../../shared/shared.service';
import { ConfirmRemoveModalComponent } from '../confirm-remove-modal/confirm-remove-modal.component';

@Component({
  selector: 'mmb-web-app-add-experience-modal',
  templateUrl: './add-experience-modal.component.html',
  styleUrls: ['./add-experience-modal.component.scss']
})
export class AddExperienceModalComponent implements OnInit {

  @Input() user: User;
  @Input() experiences: Experience;
  @Input() isEditMode: boolean;
  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();
  currentOrganisationSearch: any;
  isSearching: boolean = false;

  editProfileForm: FormGroup;

  constructor(private fb: FormBuilder,
              private profileService: ProfileService,
              public modal: NgbActiveModal,
              private toastr: ToastrService,
              private sharedService: SharedService,
              private modalService: NgbModal) {
               }

  ngOnInit() {
    this.editProfileForm = this.fb.group({
      title: [this.experiences ? this.experiences.title : '', Validators.required],
      organisation: [this.experiences ? this.experiences.organisation : '', Validators.required],
      startDate: [this.experiences ? this.experiences.start_date : '', Validators.required],
      endDate: [this.experiences ? this.experiences.end_date : '', Validators.required],
      summary: [this.experiences ? this.experiences.summary : '', Validators.required],
    });

    this._subscribeToCurrentOrganisationValueChanges();
  }

  /**
   * subscribes to value changes of current organisation
   */
  private _subscribeToCurrentOrganisationValueChanges() {
    const currentOrganisationControl = this.editProfileForm.controls['organisation'];

    this.currentOrganisationSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term =>
          this.sharedService.getOrgs(currentOrganisationControl.value)
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
   * Try to create experience
   */
  createExperience() {
    this.profileService.addUserExperience(this.editProfileForm.controls['title'].value,
        this.editProfileForm.controls['organisation'].value.id,
        this.editProfileForm.controls['startDate'].value,
        this.editProfileForm.controls['endDate'].value,
        this.editProfileForm.controls['summary'].value)
      .subscribe((response: Experience) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success('Added experience!');
      });
  }

  /**
   * Try to edit experience
   */
  editExperience() {
    this.profileService.editUserExperience(this.experiences.uuid,
        this.editProfileForm.controls['title'].value,
        this.editProfileForm.controls['organisation'].value.id,
        this.editProfileForm.controls['startDate'].value,
        this.editProfileForm.controls['endDate'].value,
        this.editProfileForm.controls['summary'].value)
      .subscribe((response: Experience) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success('Updated experience!');
      });
  }

  /**
   * Try to delete experience
   */
  deleteExperience() {
    const modalRef = this.modalService.open(ConfirmRemoveModalComponent, { centered: true });
    modalRef.componentInstance.experiences = this.experiences;
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.addSuccess.emit();
      this.closeModal();
    });
  }

  closeModal() {
    this.modal.dismiss();
  }
}

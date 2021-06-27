import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserDetails } from '../../types/helpers/user-details.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { SharedService } from '../../../shared/shared.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from '../../profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-edit-profile-info-modal',
  templateUrl: './edit-profile-info-modal.component.html',
  styleUrls: ['./edit-profile-info-modal.component.scss']
})
export class EditProfileInfoModalComponent implements OnInit {
  @Input() public user: UserDetails;
  @Input() isEditMode: boolean = true;
  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();

  showEditContactContent: boolean = false;
  currentCountriesSearch: any;
  isSearching: boolean = false;
  editProfileForm: FormGroup;

  constructor(private fb: FormBuilder,
              private sharedService: SharedService,
              public modal: NgbActiveModal,
              private profileService: ProfileService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.editProfileForm = this.fb.group({
      firstName: [this.user ? this.user.first_name : '', Validators.required],
      lastName: [this.user ? this.user.last_name : '', Validators.required],
      professionalTitle: [this.user ? this.user.credentials.professional_title : '', Validators.required],
      company: [this.user ? this.user.company : '', Validators.required],
      country: [this.user ? this.user.country_signup : '', Validators.required],
      city: [this.user ? this.user.city_signup : '', Validators.required],
    });

    this._subscribeToCurrentCountryValueChanges();
  }
  /**
   * subscribes to value changes of current country
   */
  private _subscribeToCurrentCountryValueChanges() {
    const currentCountryControl = this.editProfileForm.controls['country'];

    this.currentCountriesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.editProfileForm.controls['city'].setValue('')),
        switchMap(term =>
          this.sharedService.getCountries(currentCountryControl.value)
        ),
        tap(() => this.isSearching = false)
      );
  }

  /**
   * Used to format the result data from the lookup into the
   * display and list values. Maps `{name: "country", id:"id" }` into a string
   */
  resultFormatCountryValue(value: any) {
    if (value.name_ascii) {
      return value.name_ascii;
    }
    return value.name;
  }

  /**
   * Initially binds the string value and then after selecting
   * an item by checking either for string or key/value object.
   */
  inputFormatCountryValue(value: any) {
    if (value.name_ascii) {
      return value.name_ascii;
    }
    if (value.name) {
      return value.name;
    }
    return value;
  }

  closeModal() {
    this.modal.dismiss();
  }

  editUserPersonalInfo() {
    // Update user's professional title
    this.profileService
      .updateUserCredentials(this.editProfileForm.controls['professionalTitle'].value)
      .subscribe((response: UserDetails) => {
        this.addSuccess.emit();
      });
    // Update user's Country and City
    this.profileService
      .updateUserDetails(this.editProfileForm.controls['country'].value.id, this.editProfileForm.controls['city'].value.id)
      .subscribe((response: UserDetails) => {
        this.addSuccess.emit();
      });
    // Update user's First and Last name
    this.profileService
      .updateUserName(this.editProfileForm.controls['firstName'].value, this.editProfileForm.controls['lastName'].value)
      .subscribe((response: UserDetails) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success('Updated profile!');
      });

  }
}

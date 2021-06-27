import { Language } from './../../types/helpers/language.model';
import { LanguageViewModel } from './../../types/helpers/language.model';
import { ProfileService } from './../../profile.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../shared/shared.service';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'mmb-web-app-add-language-modal',
  templateUrl: './add-language-modal.component.html',
  styleUrls: ['./add-language-modal.component.scss']
})
export class AddLanguageModalComponent implements OnInit {
  @Input() languages: Language;
  @Input() selectedLanguage: Language;
  @Input() isEditMode: boolean;
  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();
  listOfLanguages: LanguageViewModel[] = [];

  currentCountriesSearch: any;
  isSearching: boolean = false;

  addLanguageForm: FormGroup;

  constructor(private fb: FormBuilder,
              private profileService: ProfileService,
              public modal: NgbActiveModal,
              private toastr: ToastrService,
              private sharedService: SharedService) {}

  ngOnInit() {
    this.addLanguageForm = this.fb.group({
      language: [this.languages, Validators.required],
    });

    this._subscribeToCurrentLanguageValueChanges();
  }
  /**
   * subscribes to value changes of current language
   */
  private _subscribeToCurrentLanguageValueChanges() {
    const currentLanguageControl = this.addLanguageForm.controls['language'];

    this.currentCountriesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term =>
          this.sharedService.getLanguages(currentLanguageControl.value)
        ),
        tap(() => this.isSearching = false)
      );
  }

 /**
  * Used to format the result data from the lookup into the
  * display and list values. Maps `{name: "language", id:"id" }` into a string
  */
 resultFormatLanguageValue(value: any) {
  if (value.name_ascii) {
    return value.name_ascii;
  }
  return value.name;
}

 /**
  * Initially binds the string value and then after selecting
  * an item by checking either for string or key/value object.
  */
 inputFormatLanguageValue(value: any) {
  if (value.language) {
    return value.language.name;
  }
  if (value.language_custom) {
    return value.language_custom;
  }
  return value.name;
}

  /**
   * Try to add language
   */
  createLanguage() {
    this.profileService.addLanguage(JSON.stringify(this.listOfLanguages))
      .subscribe((response: Language) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success('Added language!');
      });
  }

 /**
  * Try to edit language
  */
 editLanguage() {
   this.profileService.editLanguage(this.addLanguageForm.controls['language'].value.id, this.languages.uuid)
     .subscribe((response: Language) => {
       this.addSuccess.emit();
       this.modal.dismiss();
       this.toastr.success('Updated language!');
     });
 }

 /**
  * Try to delete language
  */
 deleteLanguage() {
   this.profileService.deleteLanguage(this.languages.uuid)
     .subscribe((response: Language) => {
       this.addSuccess.emit();
       this.modal.dismiss();
       this.toastr.success('Deleted language!');
     });
 }

  closeModal() {
    this.modal.dismiss();
  }
  addLanguageToArray() {
    let currentLanguage = this.addLanguageForm.controls["language"].value;
    if (!currentLanguage || currentLanguage === '') {
      return;
    }
    if (currentLanguage && currentLanguage.id) {
      this.listOfLanguages.push({
        language: currentLanguage.id,
        name: currentLanguage.name
      });
    } else {
      this.listOfLanguages.push({
        language_custom: currentLanguage
      });
    }
    this.addLanguageForm.controls["language"].setValue('');
    }

    removeLanguageFromArray(language) {
      const myIndex = this.listOfLanguages.indexOf(language);
      myIndex > -1 ? this.listOfLanguages.splice(myIndex, 1) : false;
    }
}

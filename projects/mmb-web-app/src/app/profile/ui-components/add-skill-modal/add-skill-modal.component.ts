import { SkillViewModel } from './../../types/helpers/skill.model';
import { ProfileService } from "./../../profile.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Skill } from "../../types/helpers/skill.model";
import { ToastrService } from "ngx-toastr";
import { SharedService } from "../../../shared/shared.service";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "mmb-web-app-add-skill-modal",
  templateUrl: "./add-skill-modal.component.html",
  styleUrls: ["./add-skill-modal.component.scss"],
})
export class AddSkillModalComponent implements OnInit {
  @Input() skills: Skill;
  @Input() selectedSkill: Skill;
  @Input() isEditMode: boolean;
  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();
  listOfSkills: SkillViewModel[] = [];
  currentCountriesSearch: any;
  isSearching: boolean;

  addSkillForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    public modal: NgbActiveModal,
    private toastr: ToastrService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.addSkillForm = this.fb.group({
      skill: [this.skills, Validators.required],
    });

    this._subscribeToCurrentSkillValueChanges();
  }

  /**
   * subscribes to value changes of current skill
   */
  private _subscribeToCurrentSkillValueChanges() {
    const currentSkillControl = this.addSkillForm.controls["skill"];

    this.currentCountriesSearch = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) =>
          this.sharedService.getSkills(currentSkillControl.value)
        ),
        tap(() => (this.isSearching = false))
      );
  }

  /**
   * Used to format the result data from the lookup into the
   * display and list values. Maps `{name: "skill", id:"id" }` into a string
   */
  resultFormatSkillValue(value: any) {
    if (value.name_ascii) {
      return value.name_ascii;
    }
    return value.name;
  }

  /**
   * Initially binds the string value and then after selecting
   * an item by checking either for string or key/value object.
   */
  inputFormatSkillValue(value: any) {
    if (value.skill) {
      return value.skill.name;
    }
    if (value.skill_custom) {
      return value.skill_custom;
    }
    return value.name;
  }

  /**
   * Try to add skill
   */
  createSkill() {
    this.profileService
      .addSkill(JSON.stringify(this.listOfSkills))
      .subscribe((response: Skill) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success("Added skill!");
      });
  }

  /**
   * Try to create skill
   */
  editSkill() {
    this.profileService
      .editSkill(this.addSkillForm.controls["skill"].value.id, this.skills.uuid)
      .subscribe((response: Skill) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success("Updated skill!");
      });
  }

  /**
   * Try to delete skill
   */
  deleteSkill() {
    this.profileService
      .deleteSkill(this.skills.uuid)
      .subscribe((response: Skill) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success("Deleted skill!");
      });
  }

  closeModal() {
    this.modal.dismiss();
  }

  addSkillToArray() {
    let currentSkill = this.addSkillForm.controls["skill"].value;
    if (!currentSkill || currentSkill === '') {
      return;
    }
    if (currentSkill && currentSkill.id) {
      this.listOfSkills.push({
        skill: currentSkill.id,
        name: currentSkill.name
      });
    } else {
      this.listOfSkills.push({
        skill_custom: currentSkill
      });
    }
    this.addSkillForm.controls["skill"].setValue('');
    }

    removeSkillFromArray(skill) {
      const myIndex = this.listOfSkills.indexOf(skill);
      myIndex > -1 ? this.listOfSkills.splice(myIndex, 1) : false;
    }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from '../../types/helpers/education.model';
import { ProfileService } from '../../profile.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Experience } from '../../types/helpers/experience.model';

@Component({
  selector: 'mmb-web-app-confirm-remove-modal',
  templateUrl: './confirm-remove-modal.component.html',
  styleUrls: ['./confirm-remove-modal.component.scss']
})
export class ConfirmRemoveModalComponent implements OnInit {
  @Input() educations: Education;
  @Input() experiences: Experience;
  @Input() removeEducationMode: boolean;
  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();

  constructor(private profileService: ProfileService,
              public modal: NgbActiveModal,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  deleteEducation() {
    this.profileService.deleteUserEducation(this.educations.uuid)
      .subscribe((response: Education) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success('Deleted education!');
      });
  }

  deleteExperience() {
    this.profileService.deleteUserExperience(this.experiences.uuid)
      .subscribe((response: Experience) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success('Deleted experience!');
      });
  }

  closeModal() {
    this.modal.dismiss();
  }

}

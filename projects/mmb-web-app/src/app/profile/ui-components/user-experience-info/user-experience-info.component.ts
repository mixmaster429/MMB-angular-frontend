import { ProfileService } from './../../profile.service';
import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../../types/helpers/experience.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDetails } from '../../types/helpers/user-details.model';
import { AddExperienceModalComponent } from '../add-experience-modal/add-experience-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mmb-web-app-user-experience-info',
  templateUrl: './user-experience-info.component.html',
  styleUrls: ['./user-experience-info.component.scss']
})
export class UserExperienceInfoComponent implements OnInit {

  @Input() experiences: Experience[];
  @Input() user: UserDetails;
  @Input() isEditMode: boolean;

  constructor(private modalService: NgbModal,
              private profileService: ProfileService) { }

  ngOnInit() {}

  /**
   * Create experience modal
   */
  addExperience() {
    const modalRef = this.modalService.open(AddExperienceModalComponent, { centered: true });
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.getProfile();
    });
  }
  /**
   * Edit experience modal
   */
  editExperience(experiences) {
    const modalRef = this.modalService.open(AddExperienceModalComponent, { centered: true });
    modalRef.componentInstance.experiences = experiences;
    modalRef.componentInstance.isEditMode = true;
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.getProfile();
    });
  }

  getProfile() {
    this.profileService.getUserProfile().subscribe((response) => {
      this.experiences = response.experiences;
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../types/helpers/education.model';
import { AddEducationModalComponent } from '../add-education-modal/add-education-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'mmb-web-app-user-education-info',
  templateUrl: './user-education-info.component.html',
  styleUrls: ['./user-education-info.component.scss']
})
export class UserEducationInfoComponent implements OnInit {

  @Input() educations: Education[];
  @Input() isEditMode: boolean;

  constructor(private modalService: NgbModal,
              private profileService: ProfileService) { }

  /**
   * Create education modal
   */
  addEducation(educations) {
    const modalRef = this.modalService.open(AddEducationModalComponent, { centered: true });
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
    modalRef.componentInstance.educations = educations;
    this.getProfile();
    });
  }

  /**
   * Create edit education modal
   */
  editEducation(educations) {
    const modalRef = this.modalService.open(AddEducationModalComponent, { centered: true });
    modalRef.componentInstance.educations = educations;
    modalRef.componentInstance.isEditMode = true;
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.getProfile();
    });
  }

  getProfile() {
    this.profileService.getUserProfile().subscribe((response) => {
      this.educations = response.education;
    });
  }

  ngOnInit() {}
}

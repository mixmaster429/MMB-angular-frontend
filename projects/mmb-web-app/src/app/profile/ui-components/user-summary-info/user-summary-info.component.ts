import { ProfileService } from './../../profile.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDetails } from '../../types/helpers/user-details.model';
import { User } from '../../types/user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SummaryEditModalComponent } from '../edit-summary-modal/edit-summary-modal.component';

@Component({
  selector: 'mmb-web-app-user-about-info',
  templateUrl: './user-summary-info.component.html',
  styleUrls: ['./user-summary-info.component.scss']
})
export class UserAboutInfoComponent implements OnInit {

  @Input() user: UserDetails;
  @Input() aboutMe: string;
  @Input() isEditMode: boolean;

  constructor(private fb: FormBuilder, private profileService: ProfileService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Create summary modal
   */
  onSummaryEdit() {
    const modalRef = this.modalService.open(SummaryEditModalComponent, { centered: true });
    modalRef.componentInstance.user = this.user;

    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.getProfile();
    });
  }

  getProfile() {
    this.profileService.getUserProfile().subscribe((response) => {
      this.aboutMe = response.credentials.summary;
    });
  }

}

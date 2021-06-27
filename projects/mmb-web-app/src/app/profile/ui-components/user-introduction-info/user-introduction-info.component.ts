import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from '../../types/helpers/user-details.model';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { SharedService } from '../../../shared/shared.service';
import { EditProfileInfoModalComponent } from '../edit-profile-info-modal/edit-profile-info-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileContactModalComponent } from '../edit-profile-contact-modal/edit-profile-contact-modal.component';
import { ProfileService } from '../../profile.service';
import { User } from '../../types/user.model';

export enum Status {
  pending = 'pending',
  active = 'active',
  error = 'error',
  warning = 'warning',
  done = 'done'
}

@Component({
  selector: 'mmb-web-app-user-summary-profile-info',
  templateUrl: './user-introduction-info.component.html',
  styleUrls: ['./user-introduction-info.component.scss']
})
export class UserSummaryProfileInfoComponent implements OnInit {
  @Input() user: User;
  @Input() isEditMode: boolean;
  showEditContactContent: boolean = false;
  currentCountriesSearch: any;
  isSearching: boolean = false;

  constructor(private modalService: NgbModal, private profileService: ProfileService) { }

  ngOnInit() { }

  /**
   * Create edit profile info modal
   */
  onProfileInfoEdit() {
    const modalRef = this.modalService.open(EditProfileInfoModalComponent, { centered: true });
    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.getProfile();
    });
  }

  getProfile() {
    this.profileService.getUserProfile().subscribe((response) => {
      this.user = response;
    });
  }
}

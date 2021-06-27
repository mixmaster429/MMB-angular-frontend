import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserOnboardingService } from '../../user-onboarding/user-onboarding.service';

export const NEW_PASSWORD_LENGTH = 8;
@Component({
  selector: 'mmb-web-app-user-onboarding-set-password',
  templateUrl: './user-onboarding-set-password.component.html',
  styleUrls: ['./user-onboarding-set-password.component.scss']
})
export class UserOnboardingSetPasswordComponent implements OnInit {
  @Output() passwordSet: EventEmitter<any> = new EventEmitter<any>();
  newPassword: string;

  constructor(private toastr: ToastrService, private userOnboardingService: UserOnboardingService) { }

  ngOnInit() {
  }


  /**
   * Set the new password for profile
   */
  onSetPassword() {
    if (!this.newPassword || this.newPassword.trim().length < NEW_PASSWORD_LENGTH) {
      this.toastr.error('The password needs to be 8 characters or more', 'Error');
      return;
    }

    // Password meets criteria, send API call
    this.userOnboardingService.setUserPassword(this.newPassword).subscribe(() => {
      this.passwordSet.emit();
    }, (err) => {
      this.toastr.error('Unable to set the password', 'Error');
    })

    this.passwordSet.emit();
  }
}

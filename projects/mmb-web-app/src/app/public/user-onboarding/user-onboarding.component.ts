import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../profile/types/user.model';

@Component({
  selector: 'mmb-web-app-user-onboarding',
  templateUrl: './user-onboarding.component.html',
  styleUrls: ['./user-onboarding.component.scss']
})
export class UserOnboardingComponent implements OnInit {
  user: User;
  isGoogleProfile: boolean; 
  isNewPasswordSet: boolean;
  isUserOnboarding: boolean;
  isGettingStarted: boolean;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  /**
   * New password has been set, load next screen
   */
  onNewPasswordSet(ev) {
    this.isNewPasswordSet = true;
  }

  /**
   * Get started with onboarding to MMB
   * @param ev 
   */
  onGetStarted(ev) {
    this.isGettingStarted = true;
  }
}

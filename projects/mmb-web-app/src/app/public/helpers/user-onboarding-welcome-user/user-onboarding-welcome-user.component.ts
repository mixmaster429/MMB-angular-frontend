import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mmb-web-app-user-onboarding-welcome-user',
  templateUrl: './user-onboarding-welcome-user.component.html',
  styleUrls: ['./user-onboarding-welcome-user.component.scss']
})
export class UserOnboardingWelcomeUserComponent implements OnInit {
  @Input() userName: string;
  @Output() getStarted: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Get started with onboarding to MMB
   */
  onGetStarted() {
    this.getStarted.emit();
  }
}

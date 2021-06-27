import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingWelcomeUserComponent } from './user-onboarding-welcome-user.component';

describe('UserOnboardingWelcomeUserComponent', () => {
  let component: UserOnboardingWelcomeUserComponent;
  let fixture: ComponentFixture<UserOnboardingWelcomeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingWelcomeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingWelcomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

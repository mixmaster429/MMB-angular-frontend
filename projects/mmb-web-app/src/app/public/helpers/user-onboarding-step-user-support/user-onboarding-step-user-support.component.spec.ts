import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingStepUserSupportComponent } from './user-onboarding-step-user-support.component';

describe('UserOnboardingStepUserSupportComponent', () => {
  let component: UserOnboardingStepUserSupportComponent;
  let fixture: ComponentFixture<UserOnboardingStepUserSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingStepUserSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingStepUserSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingStepProfessionalProfileComponent } from './user-onboarding-step-professional-profile.component';

describe('UserOnboardingStepProfessionalProfileComponent', () => {
  let component: UserOnboardingStepProfessionalProfileComponent;
  let fixture: ComponentFixture<UserOnboardingStepProfessionalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingStepProfessionalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingStepProfessionalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

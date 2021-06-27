import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingStepProfilePictureComponent } from './user-onboarding-step-profile-picture.component';

describe('UserOnboardingStepProfilePictureComponent', () => {
  let component: UserOnboardingStepProfilePictureComponent;
  let fixture: ComponentFixture<UserOnboardingStepProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingStepProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingStepProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

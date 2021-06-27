import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingStepInterestedInComponent } from './user-onboarding-step-interested-in.component';

describe('UserOnboardingStepInterestedInComponent', () => {
  let component: UserOnboardingStepInterestedInComponent;
  let fixture: ComponentFixture<UserOnboardingStepInterestedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingStepInterestedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingStepInterestedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

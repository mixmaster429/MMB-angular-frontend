import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingStepHowCanWeHelpComponent } from './user-onboarding-step-how-can-we-help.component';

describe('UserOnboardingStepHowCanWeHelpComponent', () => {
  let component: UserOnboardingStepHowCanWeHelpComponent;
  let fixture: ComponentFixture<UserOnboardingStepHowCanWeHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingStepHowCanWeHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingStepHowCanWeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

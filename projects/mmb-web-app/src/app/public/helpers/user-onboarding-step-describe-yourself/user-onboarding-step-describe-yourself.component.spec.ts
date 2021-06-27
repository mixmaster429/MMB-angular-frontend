import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingStepDescribeYourselfComponent } from './user-onboarding-step-describe-yourself.component';

describe('UserOnboardingStepDescribeYourselfComponent', () => {
  let component: UserOnboardingStepDescribeYourselfComponent;
  let fixture: ComponentFixture<UserOnboardingStepDescribeYourselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingStepDescribeYourselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingStepDescribeYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

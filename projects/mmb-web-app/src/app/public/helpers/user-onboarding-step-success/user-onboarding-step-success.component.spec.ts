import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingStepSuccessComponent } from './user-onboarding-step-success.component';

describe('UserOnboardingStepSuccessComponent', () => {
  let component: UserOnboardingStepSuccessComponent;
  let fixture: ComponentFixture<UserOnboardingStepSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingStepSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingStepSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

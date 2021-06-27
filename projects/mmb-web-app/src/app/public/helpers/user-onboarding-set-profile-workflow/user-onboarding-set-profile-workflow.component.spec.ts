import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingSetProfileWorkflowComponent } from './user-onboarding-set-profile-workflow.component';

describe('UserOnboardingSetProfileWorkflowComponent', () => {
  let component: UserOnboardingSetProfileWorkflowComponent;
  let fixture: ComponentFixture<UserOnboardingSetProfileWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingSetProfileWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingSetProfileWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

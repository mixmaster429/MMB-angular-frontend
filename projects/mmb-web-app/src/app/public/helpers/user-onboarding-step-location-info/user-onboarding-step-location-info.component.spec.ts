import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingStepLocationInfoComponent } from './user-onboarding-step-location-info.component';

describe('UserOnboardingStepLocationInfoComponent', () => {
  let component: UserOnboardingStepLocationInfoComponent;
  let fixture: ComponentFixture<UserOnboardingStepLocationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingStepLocationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingStepLocationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

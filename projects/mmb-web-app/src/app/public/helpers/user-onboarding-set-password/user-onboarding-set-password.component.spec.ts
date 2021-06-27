import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingSetPasswordComponent } from './user-onboarding-set-password.component';

describe('UserOnboardingSetPasswordComponent', () => {
  let component: UserOnboardingSetPasswordComponent;
  let fixture: ComponentFixture<UserOnboardingSetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingSetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingSetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

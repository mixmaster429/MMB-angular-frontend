import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperienceInfoComponent } from './user-experience-info.component';

describe('UserExperienceInfoComponent', () => {
  let component: UserExperienceInfoComponent;
  let fixture: ComponentFixture<UserExperienceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExperienceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

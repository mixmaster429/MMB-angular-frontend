import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEducationInfoComponent } from './user-education-info.component';

describe('UserEducationInfoComponent', () => {
  let component: UserEducationInfoComponent;
  let fixture: ComponentFixture<UserEducationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEducationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEducationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

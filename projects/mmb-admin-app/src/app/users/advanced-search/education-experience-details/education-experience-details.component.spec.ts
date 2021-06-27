import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationExperienceDetailsComponent } from './education-experience-details.component';

describe('EducationExperienceDetailsComponent', () => {
  let component: EducationExperienceDetailsComponent;
  let fixture: ComponentFixture<EducationExperienceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationExperienceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationExperienceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

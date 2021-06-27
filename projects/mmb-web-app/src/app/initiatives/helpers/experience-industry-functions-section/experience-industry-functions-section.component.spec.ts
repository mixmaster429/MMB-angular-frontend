import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceIndustryFunctionsSectionComponent } from './experience-industry-functions-section.component';

describe('ExperienceIndustryFunctionsSectionComponent', () => {
  let component: ExperienceIndustryFunctionsSectionComponent;
  let fixture: ComponentFixture<ExperienceIndustryFunctionsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceIndustryFunctionsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceIndustryFunctionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

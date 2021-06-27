import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSkillsSectionComponent } from './experience-skills-section.component';

describe('ExperienceSkillsSectionComponent', () => {
  let component: ExperienceSkillsSectionComponent;
  let fixture: ComponentFixture<ExperienceSkillsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSkillsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSkillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

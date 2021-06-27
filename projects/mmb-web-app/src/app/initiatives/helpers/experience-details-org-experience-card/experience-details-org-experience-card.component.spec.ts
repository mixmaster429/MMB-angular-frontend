import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailsOrgExperienceCardComponent } from './experience-details-org-experience-card.component';

describe('ExperienceDetailsOrgExperienceCardComponent', () => {
  let component: ExperienceDetailsOrgExperienceCardComponent;
  let fixture: ComponentFixture<ExperienceDetailsOrgExperienceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDetailsOrgExperienceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDetailsOrgExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

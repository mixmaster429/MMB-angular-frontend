import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailsOrgOverviewComponent } from './experience-details-org-overview.component';

describe('ExperienceDetailsOrgOverviewComponent', () => {
  let component: ExperienceDetailsOrgOverviewComponent;
  let fixture: ComponentFixture<ExperienceDetailsOrgOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDetailsOrgOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDetailsOrgOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

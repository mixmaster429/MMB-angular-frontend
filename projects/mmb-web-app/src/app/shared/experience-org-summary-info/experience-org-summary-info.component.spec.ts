import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceOrgSummaryInfoComponent } from './experience-org-summary-info.component';

describe('ExperienceOrgSummaryInfoComponent', () => {
  let component: ExperienceOrgSummaryInfoComponent;
  let fixture: ComponentFixture<ExperienceOrgSummaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceOrgSummaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceOrgSummaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTypeSummarySectionComponent } from './experience-type-summary-section.component';

describe('ExperienceTypeSummarySectionComponent', () => {
  let component: ExperienceTypeSummarySectionComponent;
  let fixture: ComponentFixture<ExperienceTypeSummarySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceTypeSummarySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceTypeSummarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

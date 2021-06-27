import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSummaryInfoComponent } from './experience-summary-info.component';

describe('ExperienceSummaryInfoComponent', () => {
  let component: ExperienceSummaryInfoComponent;
  let fixture: ComponentFixture<ExperienceSummaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSummaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSummaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

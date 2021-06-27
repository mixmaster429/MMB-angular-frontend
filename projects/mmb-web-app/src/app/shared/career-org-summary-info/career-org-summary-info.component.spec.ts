import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerOrgSummaryInfoComponent } from './career-org-summary-info.component';

describe('CareerOrgSummaryInfoComponent', () => {
  let component: CareerOrgSummaryInfoComponent;
  let fixture: ComponentFixture<CareerOrgSummaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerOrgSummaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerOrgSummaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSummaryInfoComponent } from './career-summary-info.component';

describe('CareerSummaryInfoComponent', () => {
  let component: CareerSummaryInfoComponent;
  let fixture: ComponentFixture<CareerSummaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerSummaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerSummaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

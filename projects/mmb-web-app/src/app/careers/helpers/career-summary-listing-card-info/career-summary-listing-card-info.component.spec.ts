import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSummaryListingCardInfoComponent } from './career-summary-listing-card-info.component';

describe('CareerSummaryListingCardInfoComponent', () => {
  let component: CareerSummaryListingCardInfoComponent;
  let fixture: ComponentFixture<CareerSummaryListingCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerSummaryListingCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerSummaryListingCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerListingCardComponent } from './career-listing-card.component';

describe('CareerListingCardComponent', () => {
  let component: CareerListingCardComponent;
  let fixture: ComponentFixture<CareerListingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerListingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerListingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

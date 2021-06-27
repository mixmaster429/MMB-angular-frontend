import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListingIndustriesInputComponent } from './event-listing-industries-input.component';

describe('EventListingIndustriesInputComponent', () => {
  let component: EventListingIndustriesInputComponent;
  let fixture: ComponentFixture<EventListingIndustriesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListingIndustriesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListingIndustriesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTicketPriceComponent } from './event-ticket-price.component';

describe('EventTicketPriceComponent', () => {
  let component: EventTicketPriceComponent;
  let fixture: ComponentFixture<EventTicketPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTicketPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTicketPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

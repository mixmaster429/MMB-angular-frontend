import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPriceItemComponent } from './ticket-price-item.component';

describe('TicketPriceItemComponent', () => {
  let component: TicketPriceItemComponent;
  let fixture: ComponentFixture<TicketPriceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketPriceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPriceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

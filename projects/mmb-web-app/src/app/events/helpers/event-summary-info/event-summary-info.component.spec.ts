import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryInfoComponent } from './event-summary-info.component';

describe('EventSummaryInfoComponent', () => {
  let component: EventSummaryInfoComponent;
  let fixture: ComponentFixture<EventSummaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSummaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExtraDetailsComponent } from './event-extra-details.component';

describe('EventExtraDetailsComponent', () => {
  let component: EventExtraDetailsComponent;
  let fixture: ComponentFixture<EventExtraDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventExtraDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventExtraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPostedByComponent } from './event-posted-by.component';

describe('EventPostedByComponent', () => {
  let component: EventPostedByComponent;
  let fixture: ComponentFixture<EventPostedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPostedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPostedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

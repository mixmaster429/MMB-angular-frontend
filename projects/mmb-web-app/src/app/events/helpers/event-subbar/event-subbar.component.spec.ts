import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSubbarComponent } from './event-subbar.component';

describe('EventSubbarComponent', () => {
  let component: EventSubbarComponent;
  let fixture: ComponentFixture<EventSubbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSubbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSubbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

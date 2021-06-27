import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeEventsComponent } from './customize-events.component';

describe('CustomizeEventsComponent', () => {
  let component: CustomizeEventsComponent;
  let fixture: ComponentFixture<CustomizeEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

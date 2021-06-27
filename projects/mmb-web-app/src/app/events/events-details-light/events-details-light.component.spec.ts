import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailsLightComponent } from './events-details-light.component';

describe('EventsDetailsLightComponent', () => {
  let component: EventsDetailsLightComponent;
  let fixture: ComponentFixture<EventsDetailsLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailsLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailsLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

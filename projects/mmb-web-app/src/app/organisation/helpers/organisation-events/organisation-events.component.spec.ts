import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationEventsComponent } from './organisation-events.component';

describe('OrganisationEventsComponent', () => {
  let component: OrganisationEventsComponent;
  let fixture: ComponentFixture<OrganisationEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventAdvancedComponent } from './new-event-advanced.component';

describe('NewEventAdvancedComponent', () => {
  let component: NewEventAdvancedComponent;
  let fixture: ComponentFixture<NewEventAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

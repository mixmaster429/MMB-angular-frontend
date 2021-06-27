import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventBasicComponent } from './new-event-basic.component';

describe('NewEventBasicComponent', () => {
  let component: NewEventBasicComponent;
  let fixture: ComponentFixture<NewEventBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

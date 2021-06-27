import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyEventComponent } from './apply-event.component';

describe('ApplyEventComponent', () => {
  let component: ApplyEventComponent;
  let fixture: ComponentFixture<ApplyEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseDetailsComponent } from './pulse-details.component';

describe('PulseDetailsComponent', () => {
  let component: PulseDetailsComponent;
  let fixture: ComponentFixture<PulseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

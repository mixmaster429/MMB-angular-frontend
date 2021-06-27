import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRatingControlComponent } from './employee-rating-control.component';

describe('EmployeeRatingControlComponent', () => {
  let component: EmployeeRatingControlComponent;
  let fixture: ComponentFixture<EmployeeRatingControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRatingControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRatingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

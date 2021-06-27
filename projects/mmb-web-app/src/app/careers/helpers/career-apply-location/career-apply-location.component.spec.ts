import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApplyLocationComponent } from './career-apply-location.component';

describe('CareerApplyLocationComponent', () => {
  let component: CareerApplyLocationComponent;
  let fixture: ComponentFixture<CareerApplyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerApplyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerApplyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

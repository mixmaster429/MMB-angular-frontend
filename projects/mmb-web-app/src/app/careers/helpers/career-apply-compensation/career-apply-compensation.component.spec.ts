import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApplyCompensationComponent } from './career-apply-compensation.component';

describe('CareerApplyCompensationComponent', () => {
  let component: CareerApplyCompensationComponent;
  let fixture: ComponentFixture<CareerApplyCompensationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerApplyCompensationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerApplyCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

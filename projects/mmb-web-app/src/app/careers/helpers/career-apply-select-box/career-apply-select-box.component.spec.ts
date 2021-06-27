import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApplySelectBoxComponent } from './career-apply-select-box.component';

describe('CareerApplySelectBoxComponent', () => {
  let component: CareerApplySelectBoxComponent;
  let fixture: ComponentFixture<CareerApplySelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerApplySelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerApplySelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

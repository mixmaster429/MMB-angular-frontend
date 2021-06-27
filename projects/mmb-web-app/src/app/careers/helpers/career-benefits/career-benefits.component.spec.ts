import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerBenefitsComponent } from './career-benefits.component';

describe('CareerBenefitsComponent', () => {
  let component: CareerBenefitsComponent;
  let fixture: ComponentFixture<CareerBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

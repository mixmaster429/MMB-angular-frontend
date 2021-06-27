import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerIndustryFunctionsSectionComponent } from './career-industry-functions-section.component';

describe('CareerIndustryFunctionsSectionComponent', () => {
  let component: CareerIndustryFunctionsSectionComponent;
  let fixture: ComponentFixture<CareerIndustryFunctionsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerIndustryFunctionsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerIndustryFunctionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

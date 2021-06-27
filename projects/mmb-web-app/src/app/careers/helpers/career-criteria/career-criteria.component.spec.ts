import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCriteriaComponent } from './career-criteria.component';

describe('CareerCriteriaComponent', () => {
  let component: CareerCriteriaComponent;
  let fixture: ComponentFixture<CareerCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerLocationsSectionComponent } from './career-locations-section.component';

describe('CareerLocationsSectionComponent', () => {
  let component: CareerLocationsSectionComponent;
  let fixture: ComponentFixture<CareerLocationsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerLocationsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerLocationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

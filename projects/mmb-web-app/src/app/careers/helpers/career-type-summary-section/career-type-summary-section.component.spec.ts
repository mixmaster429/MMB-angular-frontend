import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerTypeSummarySectionComponent } from './career-type-summary-section.component';

describe('CareerTypeSummarySectionComponent', () => {
  let component: CareerTypeSummarySectionComponent;
  let fixture: ComponentFixture<CareerTypeSummarySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerTypeSummarySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerTypeSummarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

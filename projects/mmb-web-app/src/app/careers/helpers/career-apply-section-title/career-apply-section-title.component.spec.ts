import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApplySectionTitleComponent } from './career-apply-section-title.component';

describe('CareerApplySectionTitleComponent', () => {
  let component: CareerApplySectionTitleComponent;
  let fixture: ComponentFixture<CareerApplySectionTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerApplySectionTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerApplySectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

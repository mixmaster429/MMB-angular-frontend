import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApplyProfessionalInfoComponent } from './career-apply-professional-info.component';

describe('CareerApplyProfessionalInfoComponent', () => {
  let component: CareerApplyProfessionalInfoComponent;
  let fixture: ComponentFixture<CareerApplyProfessionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerApplyProfessionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerApplyProfessionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

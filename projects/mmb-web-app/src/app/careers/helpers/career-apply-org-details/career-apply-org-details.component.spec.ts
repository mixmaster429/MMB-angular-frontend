import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApplyOrgDetailsComponent } from './career-apply-org-details.component';

describe('CareerApplyOrgDetailsComponent', () => {
  let component: CareerApplyOrgDetailsComponent;
  let fixture: ComponentFixture<CareerApplyOrgDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerApplyOrgDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerApplyOrgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

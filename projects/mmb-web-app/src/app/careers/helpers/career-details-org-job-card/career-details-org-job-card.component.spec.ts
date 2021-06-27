import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDetailsOrgJobCardComponent } from './career-details-org-job-card.component';

describe('CareerDetailsOrgJobCardComponent', () => {
  let component: CareerDetailsOrgJobCardComponent;
  let fixture: ComponentFixture<CareerDetailsOrgJobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerDetailsOrgJobCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDetailsOrgJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

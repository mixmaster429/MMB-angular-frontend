import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDetailsOrgOverviewComponent } from './career-details-org-overview.component';

describe('CareerDetailsOrgOverviewComponent', () => {
  let component: CareerDetailsOrgOverviewComponent;
  let fixture: ComponentFixture<CareerDetailsOrgOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerDetailsOrgOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDetailsOrgOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

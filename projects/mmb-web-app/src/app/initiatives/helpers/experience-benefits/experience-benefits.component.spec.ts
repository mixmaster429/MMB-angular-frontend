import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceBenefitsComponent } from './experience-benefits.component';

describe('ExperienceBenefitsComponent', () => {
  let component: ExperienceBenefitsComponent;
  let fixture: ComponentFixture<ExperienceBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

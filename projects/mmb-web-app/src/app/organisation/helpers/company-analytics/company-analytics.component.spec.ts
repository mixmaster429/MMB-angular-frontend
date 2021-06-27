import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAnalyticsComponent } from './company-analytics.component';

describe('CompanyAnalyticsComponent', () => {
  let component: CompanyAnalyticsComponent;
  let fixture: ComponentFixture<CompanyAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

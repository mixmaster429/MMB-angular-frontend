import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetApplicationsAnalyticsComponent } from './widget-applications-analytics.component';

describe('WidgetApplicationsAnalyticsComponent', () => {
  let component: WidgetApplicationsAnalyticsComponent;
  let fixture: ComponentFixture<WidgetApplicationsAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetApplicationsAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetApplicationsAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

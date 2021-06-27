import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetVisitsAnalyticsComponent } from './widget-visits-analytics.component';

describe('WidgetVisitsAnalyticsComponent', () => {
  let component: WidgetVisitsAnalyticsComponent;
  let fixture: ComponentFixture<WidgetVisitsAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetVisitsAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetVisitsAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

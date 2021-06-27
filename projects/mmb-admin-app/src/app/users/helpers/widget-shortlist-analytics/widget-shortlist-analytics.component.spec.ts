import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetShortlistAnalyticsComponent } from './widget-shortlist-analytics.component';

describe('WidgetShortlistAnalyticsComponent', () => {
  let component: WidgetShortlistAnalyticsComponent;
  let fixture: ComponentFixture<WidgetShortlistAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetShortlistAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetShortlistAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

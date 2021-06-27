import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProfileSettingsAnalyticsComponent } from './widget-profile-settings-analytics.component';

describe('WidgetProfileSettingsAnalyticsComponent', () => {
  let component: WidgetProfileSettingsAnalyticsComponent;
  let fixture: ComponentFixture<WidgetProfileSettingsAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetProfileSettingsAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetProfileSettingsAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

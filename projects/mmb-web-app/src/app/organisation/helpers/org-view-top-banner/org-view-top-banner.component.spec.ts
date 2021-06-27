import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgViewTopBannerComponent } from './org-view-top-banner.component';

describe('OrgViewTopBannerComponent', () => {
  let component: OrgViewTopBannerComponent;
  let fixture: ComponentFixture<OrgViewTopBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgViewTopBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgViewTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

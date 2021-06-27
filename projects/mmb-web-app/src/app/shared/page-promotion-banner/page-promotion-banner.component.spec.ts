import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePromotionBannerComponent } from './page-promotion-banner.component';

describe('PagePromotionBannerComponent', () => {
  let component: PagePromotionBannerComponent;
  let fixture: ComponentFixture<PagePromotionBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePromotionBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePromotionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

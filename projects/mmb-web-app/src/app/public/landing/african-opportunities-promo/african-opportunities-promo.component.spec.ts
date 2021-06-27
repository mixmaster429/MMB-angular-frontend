import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricanOpportunitiesPromoComponent } from './african-opportunities-promo.component';

describe('AfricanOpportunitiesPromoComponent', () => {
  let component: AfricanOpportunitiesPromoComponent;
  let fixture: ComponentFixture<AfricanOpportunitiesPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricanOpportunitiesPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricanOpportunitiesPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

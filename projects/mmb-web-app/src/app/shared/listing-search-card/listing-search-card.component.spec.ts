import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSearchCardComponent } from './listing-search-card.component';

describe('ListingSearchCardComponent', () => {
  let component: ListingSearchCardComponent;
  let fixture: ComponentFixture<ListingSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingSearchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

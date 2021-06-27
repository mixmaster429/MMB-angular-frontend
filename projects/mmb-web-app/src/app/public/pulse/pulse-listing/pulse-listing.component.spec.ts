import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseListingComponent } from './pulse-listing.component';

describe('PulseListingComponent', () => {
  let component: PulseListingComponent;
  let fixture: ComponentFixture<PulseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRegionsComponent } from './location-regions.component';

describe('LocationRegionsComponent', () => {
  let component: LocationRegionsComponent;
  let fixture: ComponentFixture<LocationRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

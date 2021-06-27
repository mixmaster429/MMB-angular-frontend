import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerFilterSidebarComponent } from './career-filter-sidebar.component';

describe('CareerFilterSidebarComponent', () => {
  let component: CareerFilterSidebarComponent;
  let fixture: ComponentFixture<CareerFilterSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerFilterSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerFilterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPostedByComponent } from './career-posted-by.component';

describe('CareerPostedByComponent', () => {
  let component: CareerPostedByComponent;
  let fixture: ComponentFixture<CareerPostedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerPostedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerPostedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

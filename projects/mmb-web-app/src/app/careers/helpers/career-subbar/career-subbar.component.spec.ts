import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSubbarComponent } from './career-subbar.component';

describe('CareerSubbarComponent', () => {
  let component: CareerSubbarComponent;
  let fixture: ComponentFixture<CareerSubbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerSubbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerSubbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApplyCancelModalComponent } from './career-apply-cancel-modal.component';

describe('CareerApplyCancelModalComponent', () => {
  let component: CareerApplyCancelModalComponent;
  let fixture: ComponentFixture<CareerApplyCancelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerApplyCancelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerApplyCancelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

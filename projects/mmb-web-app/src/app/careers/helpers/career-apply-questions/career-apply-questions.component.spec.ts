import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApplyQuestionsComponent } from './career-apply-questions.component';

describe('CareerApplyQuestionsComponent', () => {
  let component: CareerApplyQuestionsComponent;
  let fixture: ComponentFixture<CareerApplyQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerApplyQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerApplyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

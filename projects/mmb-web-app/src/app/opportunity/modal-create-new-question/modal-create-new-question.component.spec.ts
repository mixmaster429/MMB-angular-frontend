import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateNewQuestionComponent } from './modal-create-new-question.component';

describe('ModalCreateNewQuestionComponent', () => {
  let component: ModalCreateNewQuestionComponent;
  let fixture: ComponentFixture<ModalCreateNewQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateNewQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateNewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

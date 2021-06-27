import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateNewAnswerComponent } from './modal-create-new-answer.component';

describe('ModalCreateNewAnswerComponent', () => {
  let component: ModalCreateNewAnswerComponent;
  let fixture: ComponentFixture<ModalCreateNewAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateNewAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateNewAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

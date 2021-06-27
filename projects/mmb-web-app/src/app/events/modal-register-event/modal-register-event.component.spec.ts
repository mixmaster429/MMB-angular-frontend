import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegisterEventComponent } from './modal-register-event.component';

describe('ModalRegisterEventComponent', () => {
  let component: ModalRegisterEventComponent;
  let fixture: ComponentFixture<ModalRegisterEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRegisterEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegisterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

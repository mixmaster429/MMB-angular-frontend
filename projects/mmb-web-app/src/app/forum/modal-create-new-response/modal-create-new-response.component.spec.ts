import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateNewResponseComponent } from './modal-create-new-response.component';

describe('ModalCreateNewResponseComponent', () => {
  let component: ModalCreateNewResponseComponent;
  let fixture: ComponentFixture<ModalCreateNewResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateNewResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateNewResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

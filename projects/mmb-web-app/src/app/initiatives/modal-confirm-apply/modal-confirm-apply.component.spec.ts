import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmApplyComponent } from './modal-confirm-apply.component';

describe('ModalConfirmApplyComponent', () => {
  let component: ModalConfirmApplyComponent;
  let fixture: ComponentFixture<ModalConfirmApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

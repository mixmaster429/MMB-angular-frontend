import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExternalApplyComponent } from './modal-external-apply.component';

describe('ModalExternalApplyComponent', () => {
  let component: ModalExternalApplyComponent;
  let fixture: ComponentFixture<ModalExternalApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExternalApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExternalApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

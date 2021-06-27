import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApplyCareerComponent } from './modal-apply-career.component';

describe('ModalApplyCareerComponent', () => {
  let component: ModalApplyCareerComponent;
  let fixture: ComponentFixture<ModalApplyCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApplyCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApplyCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

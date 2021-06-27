import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditCompanyInfoComponent } from './modal-edit-company-info.component';

describe('ModalEditCompanyInfoComponent', () => {
  let component: ModalEditCompanyInfoComponent;
  let fixture: ComponentFixture<ModalEditCompanyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditCompanyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

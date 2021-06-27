import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRemoveModalComponent } from './confirm-remove-modal.component';

describe('ConfirmRemoveModalComponent', () => {
  let component: ConfirmRemoveModalComponent;
  let fixture: ComponentFixture<ConfirmRemoveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRemoveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

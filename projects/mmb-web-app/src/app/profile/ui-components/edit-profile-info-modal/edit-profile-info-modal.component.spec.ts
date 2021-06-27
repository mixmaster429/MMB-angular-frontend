import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileInfoModalComponent } from './edit-profile-info-modal.component';

describe('EditProfileInfoModalComponent', () => {
  let component: EditProfileInfoModalComponent;
  let fixture: ComponentFixture<EditProfileInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

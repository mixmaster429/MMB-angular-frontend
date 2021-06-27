import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileContactModalComponent } from './edit-profile-contact-modal.component';

describe('EditProfileContactModalComponent', () => {
  let component: EditProfileContactModalComponent;
  let fixture: ComponentFixture<EditProfileContactModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileContactModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

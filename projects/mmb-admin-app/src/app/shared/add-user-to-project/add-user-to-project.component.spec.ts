import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserToProjectComponent } from './add-user-to-project.component';

describe('AddUserToProjectComponent', () => {
  let component: AddUserToProjectComponent;
  let fixture: ComponentFixture<AddUserToProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserToProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

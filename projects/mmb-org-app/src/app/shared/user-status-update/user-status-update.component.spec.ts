import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusUpdateComponent } from './user-status-update.component';

describe('UserStatusUpdateComponent', () => {
  let component: UserStatusUpdateComponent;
  let fixture: ComponentFixture<UserStatusUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatusUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListDetailedComponent } from './users-list-detailed.component';

describe('UsersListDetailedComponent', () => {
  let component: UsersListDetailedComponent;
  let fixture: ComponentFixture<UsersListDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

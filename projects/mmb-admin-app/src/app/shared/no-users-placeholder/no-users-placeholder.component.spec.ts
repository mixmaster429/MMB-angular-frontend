import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUsersPlaceholderComponent } from './no-users-placeholder.component';

describe('NoUsersPlaceholderComponent', () => {
  let component: NoUsersPlaceholderComponent;
  let fixture: ComponentFixture<NoUsersPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoUsersPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoUsersPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAssignedUsersComponent } from './search-assigned-users.component';

describe('SearchAssignedUsersComponent', () => {
  let component: SearchAssignedUsersComponent;
  let fixture: ComponentFixture<SearchAssignedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAssignedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAssignedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

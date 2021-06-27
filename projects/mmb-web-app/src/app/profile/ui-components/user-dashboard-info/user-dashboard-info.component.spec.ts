import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardInfoComponent } from './user-dashboard-info.component';

describe('UserDashboardInfoComponent', () => {
  let component: UserDashboardInfoComponent;
  let fixture: ComponentFixture<UserDashboardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

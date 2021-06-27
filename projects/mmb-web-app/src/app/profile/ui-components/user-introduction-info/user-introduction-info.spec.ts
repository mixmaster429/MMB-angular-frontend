import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSummaryProfileInfoComponent } from './user-introduction-info.component';

describe('UserSummaryInfoComponent', () => {
  let component: UserSummaryProfileInfoComponent;
  let fixture: ComponentFixture<UserSummaryProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSummaryProfileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSummaryProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

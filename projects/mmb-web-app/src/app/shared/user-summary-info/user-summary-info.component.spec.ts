import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSummaryInfoComponent } from './user-summary-info.component';

describe('UserSummaryInfoComponent', () => {
  let component: UserSummaryInfoComponent;
  let fixture: ComponentFixture<UserSummaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSummaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSummaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

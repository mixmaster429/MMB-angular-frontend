import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySubNavbarComponent } from './opportunity-sub-navbar.component';

describe('OpportunitySubNavbarComponent', () => {
  let component: OpportunitySubNavbarComponent;
  let fixture: ComponentFixture<OpportunitySubNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitySubNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitySubNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

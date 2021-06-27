import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpportunityComponent } from './create-opportunity.component';

describe('CreateOpportunityComponent', () => {
  let component: CreateOpportunityComponent;
  let fixture: ComponentFixture<CreateOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

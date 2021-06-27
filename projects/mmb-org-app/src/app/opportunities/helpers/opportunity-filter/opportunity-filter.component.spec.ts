import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityFilterComponent } from './opportunity-filter.component';

describe('OpportunityFilterComponent', () => {
  let component: OpportunityFilterComponent;
  let fixture: ComponentFixture<OpportunityFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

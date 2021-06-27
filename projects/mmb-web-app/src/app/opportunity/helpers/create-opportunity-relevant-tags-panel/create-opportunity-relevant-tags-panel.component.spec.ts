import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpportunityRelevantTagsPanelComponent } from './create-opportunity-relevant-tags-panel.component';

describe('CreateOpportunityRelevantTagsPanelComponent', () => {
  let component: CreateOpportunityRelevantTagsPanelComponent;
  let fixture: ComponentFixture<CreateOpportunityRelevantTagsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpportunityRelevantTagsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportunityRelevantTagsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

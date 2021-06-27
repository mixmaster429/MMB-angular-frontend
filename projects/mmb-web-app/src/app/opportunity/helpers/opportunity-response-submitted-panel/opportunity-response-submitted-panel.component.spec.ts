import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityResponseSubmittedPanelComponent } from './opportunity-response-submitted-panel.component';

describe('OpportunityResponseSubmittedPanelComponent', () => {
  let component: OpportunityResponseSubmittedPanelComponent;
  let fixture: ComponentFixture<OpportunityResponseSubmittedPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityResponseSubmittedPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityResponseSubmittedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

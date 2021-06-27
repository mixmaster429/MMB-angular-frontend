import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpportunityTimeframePanelComponent } from './create-opportunity-timeframe-panel.component';

describe('CreateOpportunityTimeframePanelComponent', () => {
  let component: CreateOpportunityTimeframePanelComponent;
  let fixture: ComponentFixture<CreateOpportunityTimeframePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpportunityTimeframePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportunityTimeframePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

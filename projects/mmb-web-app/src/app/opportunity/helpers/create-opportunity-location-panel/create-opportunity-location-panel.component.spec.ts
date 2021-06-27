import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpportunityLocationPanelComponent } from './create-opportunity-location-panel.component';

describe('CreateOpportunityLocationPanelComponent', () => {
  let component: CreateOpportunityLocationPanelComponent;
  let fixture: ComponentFixture<CreateOpportunityLocationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpportunityLocationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportunityLocationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

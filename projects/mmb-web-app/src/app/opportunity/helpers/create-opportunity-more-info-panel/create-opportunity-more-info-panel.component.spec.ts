import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpportunityMoreInfoPanelComponent } from './create-opportunity-more-info-panel.component';

describe('CreateOpportunityMoreInfoPanelComponent', () => {
  let component: CreateOpportunityMoreInfoPanelComponent;
  let fixture: ComponentFixture<CreateOpportunityMoreInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpportunityMoreInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportunityMoreInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

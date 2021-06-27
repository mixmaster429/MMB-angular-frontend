import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationSummaryPanelComponent } from './organisation-summary-panel.component';

describe('OrganisationSummaryPanelComponent', () => {
  let component: OrganisationSummaryPanelComponent;
  let fixture: ComponentFixture<OrganisationSummaryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationSummaryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationSummaryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

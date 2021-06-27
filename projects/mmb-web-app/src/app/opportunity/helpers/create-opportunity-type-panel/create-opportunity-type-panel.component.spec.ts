import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpportunityTypePanelComponent } from './create-opportunity-type-panel.component';

describe('CreateOpportunityTypePanelComponent', () => {
  let component: CreateOpportunityTypePanelComponent;
  let fixture: ComponentFixture<CreateOpportunityTypePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpportunityTypePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportunityTypePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

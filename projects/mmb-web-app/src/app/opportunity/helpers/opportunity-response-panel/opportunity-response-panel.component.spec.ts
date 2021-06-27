import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityResponsePanelComponent } from './opportunity-response-panel.component';

describe('OpportunityResponsePanelComponent', () => {
  let component: OpportunityResponsePanelComponent;
  let fixture: ComponentFixture<OpportunityResponsePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityResponsePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityResponsePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

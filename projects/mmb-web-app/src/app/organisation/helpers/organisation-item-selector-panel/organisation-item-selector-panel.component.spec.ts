import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationItemSelectorPanelComponent } from './organisation-item-selector-panel.component';

describe('OrganisationItemSelectorPanelComponent', () => {
  let component: OrganisationItemSelectorPanelComponent;
  let fixture: ComponentFixture<OrganisationItemSelectorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationItemSelectorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationItemSelectorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

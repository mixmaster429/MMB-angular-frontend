import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationMetaInfoPanelComponent } from './organisation-meta-info-panel.component';

describe('OrganisationMetaInfoPanelComponent', () => {
  let component: OrganisationMetaInfoPanelComponent;
  let fixture: ComponentFixture<OrganisationMetaInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationMetaInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationMetaInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

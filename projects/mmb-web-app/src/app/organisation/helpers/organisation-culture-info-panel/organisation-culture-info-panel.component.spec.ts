import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationCultureInfoPanelComponent } from './organisation-culture-info-panel.component';

describe('OrganisationCultureInfoPanelComponent', () => {
  let component: OrganisationCultureInfoPanelComponent;
  let fixture: ComponentFixture<OrganisationCultureInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationCultureInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationCultureInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

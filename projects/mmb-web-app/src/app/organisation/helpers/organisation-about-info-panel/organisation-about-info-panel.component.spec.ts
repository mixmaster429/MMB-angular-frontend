import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationAboutInfoPanelComponent } from './organisation-about-info-panel.component';

describe('OrganisationAboutInfoPanelComponent', () => {
  let component: OrganisationAboutInfoPanelComponent;
  let fixture: ComponentFixture<OrganisationAboutInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationAboutInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationAboutInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

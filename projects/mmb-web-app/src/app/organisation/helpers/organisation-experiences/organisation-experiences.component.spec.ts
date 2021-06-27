import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationExperiencesComponent } from './organisation-experiences.component';

describe('OrganisationExperiencesComponent', () => {
  let component: OrganisationExperiencesComponent;
  let fixture: ComponentFixture<OrganisationExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

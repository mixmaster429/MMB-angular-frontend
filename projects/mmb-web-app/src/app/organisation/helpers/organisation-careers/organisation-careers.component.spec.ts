import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationCareersComponent } from './organisation-careers.component';

describe('OrganisationCareersComponent', () => {
  let component: OrganisationCareersComponent;
  let fixture: ComponentFixture<OrganisationCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

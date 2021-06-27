import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDescriptionRolesComponent } from './experience-description-roles.component';

describe('ExperienceDescriptionRolesComponent', () => {
  let component: ExperienceDescriptionRolesComponent;
  let fixture: ComponentFixture<ExperienceDescriptionRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDescriptionRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDescriptionRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

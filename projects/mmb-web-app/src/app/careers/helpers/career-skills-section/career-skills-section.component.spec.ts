import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSkillsSectionComponent } from './career-skills-section.component';

describe('CareerSkillsSectionComponent', () => {
  let component: CareerSkillsSectionComponent;
  let fixture: ComponentFixture<CareerSkillsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerSkillsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerSkillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

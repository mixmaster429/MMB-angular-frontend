import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceLocationsSectionComponent } from './experience-locations-section.component';

describe('ExperienceLocationsSectionComponent', () => {
  let component: ExperienceLocationsSectionComponent;
  let fixture: ComponentFixture<ExperienceLocationsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceLocationsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceLocationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

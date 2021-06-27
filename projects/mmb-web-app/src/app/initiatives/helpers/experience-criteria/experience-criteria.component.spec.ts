import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCriteriaComponent } from './experience-criteria.component';

describe('ExperienceCriteriaComponent', () => {
  let component: ExperienceCriteriaComponent;
  let fixture: ComponentFixture<ExperienceCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

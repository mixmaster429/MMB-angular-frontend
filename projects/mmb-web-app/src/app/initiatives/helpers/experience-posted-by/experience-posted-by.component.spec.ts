import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePostedByComponent } from './experience-posted-by.component';

describe('ExperiencePostedByComponent', () => {
  let component: ExperiencePostedByComponent;
  let fixture: ComponentFixture<ExperiencePostedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencePostedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencePostedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

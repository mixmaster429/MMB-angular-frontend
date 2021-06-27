import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSubbarComponent } from './experience-subbar.component';

describe('ExperienceSubbarComponent', () => {
  let component: ExperienceSubbarComponent;
  let fixture: ComponentFixture<ExperienceSubbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSubbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSubbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

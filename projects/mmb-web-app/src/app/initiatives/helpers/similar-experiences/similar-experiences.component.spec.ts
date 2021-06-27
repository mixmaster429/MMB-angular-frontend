import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarExperiencesComponent } from './similar-experiences.component';

describe('SimilarExperiencesComponent', () => {
  let component: SimilarExperiencesComponent;
  let fixture: ComponentFixture<SimilarExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

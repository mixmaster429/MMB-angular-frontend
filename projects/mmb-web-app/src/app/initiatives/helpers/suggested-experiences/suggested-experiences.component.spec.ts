import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedExperiencesComponent } from './suggested-experiences.component';

describe('SuggestedExperiencesComponent', () => {
  let component: SuggestedExperiencesComponent;
  let fixture: ComponentFixture<SuggestedExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

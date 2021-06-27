import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoProjectsCreatedPlaceholderComponent } from './no-projects-created-placeholder.component';

describe('NoProjectsCreatedPlaceholderComponent', () => {
  let component: NoProjectsCreatedPlaceholderComponent;
  let fixture: ComponentFixture<NoProjectsCreatedPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoProjectsCreatedPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoProjectsCreatedPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

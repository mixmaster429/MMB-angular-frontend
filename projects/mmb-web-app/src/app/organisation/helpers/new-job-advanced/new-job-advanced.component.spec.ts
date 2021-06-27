import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobAdvancedComponent } from './new-job-advanced.component';

describe('NewJobAdvancedComponent', () => {
  let component: NewJobAdvancedComponent;
  let fixture: ComponentFixture<NewJobAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

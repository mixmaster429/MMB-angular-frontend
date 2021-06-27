import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeJobsComponent } from './customize-jobs.component';

describe('CustomizeJobsComponent', () => {
  let component: CustomizeJobsComponent;
  let fixture: ComponentFixture<CustomizeJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

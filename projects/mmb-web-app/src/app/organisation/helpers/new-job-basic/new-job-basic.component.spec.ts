import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobBasicComponent } from './new-job-basic.component';

describe('NewJobBasicComponent', () => {
  let component: NewJobBasicComponent;
  let fixture: ComponentFixture<NewJobBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

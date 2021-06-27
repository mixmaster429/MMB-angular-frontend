import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeSeniorityLevelComponent } from './badge-seniority-level.component';

describe('BadgeSeniorityLevelComponent', () => {
  let component: BadgeSeniorityLevelComponent;
  let fixture: ComponentFixture<BadgeSeniorityLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeSeniorityLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeSeniorityLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

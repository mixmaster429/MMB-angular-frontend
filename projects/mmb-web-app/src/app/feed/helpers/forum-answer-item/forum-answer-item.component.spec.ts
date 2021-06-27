import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAnswerItemComponent } from './forum-answer-item.component';

describe('ForumAnswerItemComponent', () => {
  let component: ForumAnswerItemComponent;
  let fixture: ComponentFixture<ForumAnswerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumAnswerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAnswerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

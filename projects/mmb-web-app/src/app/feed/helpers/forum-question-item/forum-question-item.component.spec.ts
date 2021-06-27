import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumQuestionItemComponent } from './forum-question-item.component';

describe('ForumQuestionItemComponent', () => {
  let component: ForumQuestionItemComponent;
  let fixture: ComponentFixture<ForumQuestionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumQuestionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumQuestionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

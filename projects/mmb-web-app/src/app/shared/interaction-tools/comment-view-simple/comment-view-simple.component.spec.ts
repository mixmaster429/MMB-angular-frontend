import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentViewSimpleComponent } from './comment-view-simple.component';

describe('CommentViewSimpleComponent', () => {
  let component: CommentViewSimpleComponent;
  let fixture: ComponentFixture<CommentViewSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentViewSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentViewSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

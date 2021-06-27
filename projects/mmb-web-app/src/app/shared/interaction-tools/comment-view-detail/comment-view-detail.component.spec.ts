import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentViewDetailComponent } from './comment-view-detail.component';

describe('CommentViewDetailComponent', () => {
  let component: CommentViewDetailComponent;
  let fixture: ComponentFixture<CommentViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

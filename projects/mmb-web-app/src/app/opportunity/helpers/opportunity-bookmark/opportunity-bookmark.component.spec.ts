import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityBookmarkComponent } from './opportunity-bookmark.component';

describe('OpportunityBookmarkComponent', () => {
  let component: OpportunityBookmarkComponent;
  let fixture: ComponentFixture<OpportunityBookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityBookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

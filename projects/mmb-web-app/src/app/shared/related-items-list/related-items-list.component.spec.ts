import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedItemsListComponent } from './related-items-list.component';

describe('RelatedItemsListComponent', () => {
  let component: RelatedItemsListComponent;
  let fixture: ComponentFixture<RelatedItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListItemPreviewComponent } from './card-list-item-preview.component';

describe('CardListItemPreviewComponent', () => {
  let component: CardListItemPreviewComponent;
  let fixture: ComponentFixture<CardListItemPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListItemPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTagsComponent } from './card-tags.component';

describe('CardTagsComponent', () => {
  let component: CardTagsComponent;
  let fixture: ComponentFixture<CardTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

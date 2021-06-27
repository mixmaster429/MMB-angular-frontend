import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSeparatorBorderComponent } from './card-separator-border.component';

describe('CardSeparatorBorderComponent', () => {
  let component: CardSeparatorBorderComponent;
  let fixture: ComponentFixture<CardSeparatorBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSeparatorBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSeparatorBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

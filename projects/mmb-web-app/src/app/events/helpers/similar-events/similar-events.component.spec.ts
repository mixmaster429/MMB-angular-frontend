import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarEventsComponent } from './similar-events.component';

describe('SimilarEventsComponent', () => {
  let component: SimilarEventsComponent;
  let fixture: ComponentFixture<SimilarEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

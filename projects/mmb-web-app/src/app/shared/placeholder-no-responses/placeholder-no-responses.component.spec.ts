import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderNoResponsesComponent } from './placeholder-no-responses.component';

describe('PlaceholderNoResponsesComponent', () => {
  let component: PlaceholderNoResponsesComponent;
  let fixture: ComponentFixture<PlaceholderNoResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderNoResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderNoResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

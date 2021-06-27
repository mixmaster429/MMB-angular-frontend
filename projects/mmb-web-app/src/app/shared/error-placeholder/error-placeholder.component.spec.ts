import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPlaceholderComponent } from './error-placeholder.component';

describe('ErrorPlaceholderComponent', () => {
  let component: ErrorPlaceholderComponent;
  let fixture: ComponentFixture<ErrorPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

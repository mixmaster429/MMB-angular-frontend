import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlerDemoComponent } from './error-handler-demo.component';

describe('ErrorHandlerDemoComponent', () => {
  let component: ErrorHandlerDemoComponent;
  let fixture: ComponentFixture<ErrorHandlerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorHandlerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

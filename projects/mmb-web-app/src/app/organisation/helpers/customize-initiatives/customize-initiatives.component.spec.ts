import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeInitiativesComponent } from './customize-initiatives.component';

describe('CustomizeInitiativesComponent', () => {
  let component: CustomizeInitiativesComponent;
  let fixture: ComponentFixture<CustomizeInitiativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeInitiativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

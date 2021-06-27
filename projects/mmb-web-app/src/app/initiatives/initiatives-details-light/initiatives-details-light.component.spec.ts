import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativesDetailsLightComponent } from './initiatives-details-light.component';

describe('InitiativesDetailsLightComponent', () => {
  let component: InitiativesDetailsLightComponent;
  let fixture: ComponentFixture<InitiativesDetailsLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativesDetailsLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativesDetailsLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

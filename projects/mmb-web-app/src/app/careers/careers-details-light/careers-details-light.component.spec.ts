import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersDetailsLightComponent } from './careers-details-light.component';

describe('CareersDetailsLightComponent', () => {
  let component: CareersDetailsLightComponent;
  let fixture: ComponentFixture<CareersDetailsLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersDetailsLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersDetailsLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

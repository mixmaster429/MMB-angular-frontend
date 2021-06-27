import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDescriptionRolesComponent } from './career-description-roles.component';

describe('CareerDescriptionRolesComponent', () => {
  let component: CareerDescriptionRolesComponent;
  let fixture: ComponentFixture<CareerDescriptionRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerDescriptionRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDescriptionRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

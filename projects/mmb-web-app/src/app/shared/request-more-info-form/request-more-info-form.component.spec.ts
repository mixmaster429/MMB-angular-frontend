import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMoreInfoFormComponent } from './request-more-info-form/request-more-info-form.component';

describe('FormComponent', () => {
  let component: RequestMoreInfoFormComponent;
  let fixture: ComponentFixture<RequestMoreInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMoreInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMoreInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

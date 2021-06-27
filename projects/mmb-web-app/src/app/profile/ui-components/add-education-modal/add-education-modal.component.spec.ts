import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationModalComponent } from './add-education-modal.component';

describe('AddEducationModalComponent', () => {
  let component: AddEducationModalComponent;
  let fixture: ComponentFixture<AddEducationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEducationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEducationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

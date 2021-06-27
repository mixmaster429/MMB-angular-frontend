import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceModalComponent } from './add-experience-modal.component';

describe('AddExperienceModalComponent', () => {
  let component: AddExperienceModalComponent;
  let fixture: ComponentFixture<AddExperienceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExperienceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExperienceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

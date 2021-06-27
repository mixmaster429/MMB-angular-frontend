import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillModalComponent } from './add-skill-modal.component';

describe('AddSkillModalComponent', () => {
  let component: AddSkillModalComponent;
  let fixture: ComponentFixture<AddSkillModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkillModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

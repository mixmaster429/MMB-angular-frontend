import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInlineIconComponent } from './edit-inline-icon.component';

describe('EditInlineIconComponent', () => {
  let component: EditInlineIconComponent;
  let fixture: ComponentFixture<EditInlineIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInlineIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInlineIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

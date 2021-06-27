import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverUserComponent } from './popover-user.component';

describe('PopoverUserComponent', () => {
  let component: PopoverUserComponent;
  let fixture: ComponentFixture<PopoverUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

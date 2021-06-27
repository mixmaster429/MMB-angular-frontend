import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLocationComponent } from './single-location.component';

describe('SingleLocationComponent', () => {
  let component: SingleLocationComponent;
  let fixture: ComponentFixture<SingleLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLocationComponent } from './multi-location.component';

describe('MultiLocationComponent', () => {
  let component: MultiLocationComponent;
  let fixture: ComponentFixture<MultiLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

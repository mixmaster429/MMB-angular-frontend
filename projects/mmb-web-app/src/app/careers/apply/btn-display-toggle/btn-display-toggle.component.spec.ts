import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDisplayToggleComponent } from './btn-display-toggle.component';

describe('BtnDisplayToggleComponent', () => {
  let component: BtnDisplayToggleComponent;
  let fixture: ComponentFixture<BtnDisplayToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDisplayToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDisplayToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

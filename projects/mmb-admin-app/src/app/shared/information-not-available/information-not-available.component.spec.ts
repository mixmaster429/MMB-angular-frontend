import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationNotAvailableComponent } from './information-not-available.component';

describe('InformationNotAvailableComponent', () => {
  let component: InformationNotAvailableComponent;
  let fixture: ComponentFixture<InformationNotAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationNotAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

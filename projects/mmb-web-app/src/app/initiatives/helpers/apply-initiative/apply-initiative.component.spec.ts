import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyInitiativeComponent } from './apply-initiative.component';

describe('ApplyInitiativeComponent', () => {
  let component: ApplyInitiativeComponent;
  let fixture: ComponentFixture<ApplyInitiativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyInitiativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

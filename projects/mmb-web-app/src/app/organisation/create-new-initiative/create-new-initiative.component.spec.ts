import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewInitiativeComponent } from './create-new-initiative.component';

describe('CreateNewInitiativeComponent', () => {
  let component: CreateNewInitiativeComponent;
  let fixture: ComponentFixture<CreateNewInitiativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewInitiativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInitiativeBasicComponent } from './new-initiative-basic.component';

describe('NewInitiativeBasicComponent', () => {
  let component: NewInitiativeBasicComponent;
  let fixture: ComponentFixture<NewInitiativeBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInitiativeBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInitiativeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

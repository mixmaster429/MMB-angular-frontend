import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInitiativeAdvancedComponent } from './new-initiative-advanced.component';

describe('NewInitiativeAdvancedComponent', () => {
  let component: NewInitiativeAdvancedComponent;
  let fixture: ComponentFixture<NewInitiativeAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInitiativeAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInitiativeAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUserAssignedPlaceholderComponent } from './no-user-assigned-placeholder.component';

describe('NoUserAssignedPlaceholderComponent', () => {
  let component: NoUserAssignedPlaceholderComponent;
  let fixture: ComponentFixture<NoUserAssignedPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoUserAssignedPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoUserAssignedPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

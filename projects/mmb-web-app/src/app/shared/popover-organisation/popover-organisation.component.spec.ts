import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverOrganisationComponent } from './popover-organisation.component';

describe('PopoverOrganisationComponent', () => {
  let component: PopoverOrganisationComponent;
  let fixture: ComponentFixture<PopoverOrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverOrganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosSectionComponent } from './logos-section.component';

describe('LogosSectionComponent', () => {
  let component: LogosSectionComponent;
  let fixture: ComponentFixture<LogosSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogosSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

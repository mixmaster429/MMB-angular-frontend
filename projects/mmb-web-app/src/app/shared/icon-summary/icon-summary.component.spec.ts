import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSummaryComponent } from './icon-summary.component';

describe('IconSummaryComponent', () => {
  let component: IconSummaryComponent;
  let fixture: ComponentFixture<IconSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

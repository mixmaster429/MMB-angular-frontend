import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfUseTopBarComponent } from './terms-of-use-top-bar.component';

describe('TermsOfUseTopBarComponent', () => {
  let component: TermsOfUseTopBarComponent;
  let fixture: ComponentFixture<TermsOfUseTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOfUseTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOfUseTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

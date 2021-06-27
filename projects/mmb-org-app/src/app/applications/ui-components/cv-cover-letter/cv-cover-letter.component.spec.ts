import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCoverLetterComponent } from './cv-cover-letter.component';

describe('CvCoverLetterComponent', () => {
  let component: CvCoverLetterComponent;
  let fixture: ComponentFixture<CvCoverLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCoverLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCoverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

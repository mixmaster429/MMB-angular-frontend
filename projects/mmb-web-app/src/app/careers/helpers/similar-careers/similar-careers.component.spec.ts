import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarCareersComponent } from './similar-careers.component';

describe('SimilarCareersComponent', () => {
  let component: SimilarCareersComponent;
  let fixture: ComponentFixture<SimilarCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

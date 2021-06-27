import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedCareersComponent } from './suggested-careers.component';

describe('SuggestedCareersComponent', () => {
  let component: SuggestedCareersComponent;
  let fixture: ComponentFixture<SuggestedCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

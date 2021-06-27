import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarOpportunitiesComponent } from './similar-opportunities.component';

describe('SimilarOpportunitiesComponent', () => {
  let component: SimilarOpportunitiesComponent;
  let fixture: ComponentFixture<SimilarOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

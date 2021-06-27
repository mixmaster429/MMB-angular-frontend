import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedInOpportunitySectionComponent } from './interested-in-opportunity-section.component';

describe('InterestedInOpportunitySectionComponent', () => {
  let component: InterestedInOpportunitySectionComponent;
  let fixture: ComponentFixture<InterestedInOpportunitySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedInOpportunitySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedInOpportunitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

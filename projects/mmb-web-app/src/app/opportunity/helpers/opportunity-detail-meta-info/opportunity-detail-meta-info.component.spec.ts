import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDetailMetaInfoComponent } from './opportunity-detail-meta-info.component';

describe('OpportunityDetailMetaInfoComponent', () => {
  let component: OpportunityDetailMetaInfoComponent;
  let fixture: ComponentFixture<OpportunityDetailMetaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityDetailMetaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityDetailMetaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpportunityCategoryPanelComponent } from './create-opportunity-category-panel.component';

describe('CreateOpportunityCategoryPanelComponent', () => {
  let component: CreateOpportunityCategoryPanelComponent;
  let fixture: ComponentFixture<CreateOpportunityCategoryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpportunityCategoryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportunityCategoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelFiltersComponent } from './top-level-filters.component';

describe('TopLevelFiltersComponent', () => {
  let component: TopLevelFiltersComponent;
  let fixture: ComponentFixture<TopLevelFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

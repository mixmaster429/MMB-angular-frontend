import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelSearchPanelComponent } from './top-level-search-panel.component';

describe('TopLevelSearchPanelComponent', () => {
  let component: TopLevelSearchPanelComponent;
  let fixture: ComponentFixture<TopLevelSearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelSearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

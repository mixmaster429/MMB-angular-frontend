import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNavigationPanelComponent } from './item-navigation-panel.component';

describe('ItemNavigationPanelComponent', () => {
  let component: ItemNavigationPanelComponent;
  let fixture: ComponentFixture<ItemNavigationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNavigationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNavigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

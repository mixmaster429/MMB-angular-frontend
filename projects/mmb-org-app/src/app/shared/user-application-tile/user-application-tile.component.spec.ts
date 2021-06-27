import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplicationTileComponent } from './user-application-tile.component';

describe('UserApplicationTileComponent', () => {
  let component: UserApplicationTileComponent;
  let fixture: ComponentFixture<UserApplicationTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApplicationTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplicationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

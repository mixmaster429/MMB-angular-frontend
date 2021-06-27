import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemGeneratorComponent } from './user-item-generator.component';

describe('UserItemGeneratorComponent', () => {
  let component: UserItemGeneratorComponent;
  let fixture: ComponentFixture<UserItemGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItemGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

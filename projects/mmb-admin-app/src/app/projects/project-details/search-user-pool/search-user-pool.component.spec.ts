import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserPoolComponent } from './search-user-pool.component';

describe('SearchUserPoolComponent', () => {
  let component: SearchUserPoolComponent;
  let fixture: ComponentFixture<SearchUserPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

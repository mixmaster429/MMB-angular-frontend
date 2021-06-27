import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSuffixLoaderComponent } from './input-suffix-loader.component';

describe('InputSuffixLoaderComponent', () => {
  let component: InputSuffixLoaderComponent;
  let fixture: ComponentFixture<InputSuffixLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSuffixLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSuffixLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

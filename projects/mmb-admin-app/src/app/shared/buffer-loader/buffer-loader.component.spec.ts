import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferLoaderComponent } from './buffer-loader.component';

describe('BufferLoaderComponent', () => {
  let component: BufferLoaderComponent;
  let fixture: ComponentFixture<BufferLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufferLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

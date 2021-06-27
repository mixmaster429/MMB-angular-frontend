import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsUploadComponent } from './docs-upload.component';

describe('DocsUploadComponent', () => {
  let component: DocsUploadComponent;
  let fixture: ComponentFixture<DocsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseReplyToolsComponent } from './response-reply-tools.component';

describe('ResponseReplyToolsComponent', () => {
  let component: ResponseReplyToolsComponent;
  let fixture: ComponentFixture<ResponseReplyToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseReplyToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseReplyToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

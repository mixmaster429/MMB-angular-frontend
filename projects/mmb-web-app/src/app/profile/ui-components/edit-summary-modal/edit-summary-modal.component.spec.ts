import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryEditModalComponent } from './edit-summary-modal.component';

describe('SummaryEditModalComponent', () => {
  let component: SummaryEditModalComponent;
  let fixture: ComponentFixture<SummaryEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPanelComponent } from './voting-panel.component';

describe('VotingPanelComponent', () => {
  let component: VotingPanelComponent;
  let fixture: ComponentFixture<VotingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

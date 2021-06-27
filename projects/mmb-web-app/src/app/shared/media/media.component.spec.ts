import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmbWebAppMediaComponent } from './media.component';

describe('IconsHeadersComponent', () => {
  let component: MmbWebAppMediaComponent;
  let fixture: ComponentFixture<MmbWebAppMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmbWebAppMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmbWebAppMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCart1Component } from './view-cart1.component';

describe('ViewCart1Component', () => {
  let component: ViewCart1Component;
  let fixture: ComponentFixture<ViewCart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

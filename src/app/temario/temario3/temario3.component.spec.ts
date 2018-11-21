import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temario3Component } from './temario3.component';

describe('Temario3Component', () => {
  let component: Temario3Component;
  let fixture: ComponentFixture<Temario3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temario3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temario3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

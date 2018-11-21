import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temario4Component } from './temario4.component';

describe('Temario4Component', () => {
  let component: Temario4Component;
  let fixture: ComponentFixture<Temario4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temario4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temario4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

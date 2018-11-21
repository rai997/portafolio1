import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temario2Component } from './temario2.component';

describe('Temario2Component', () => {
  let component: Temario2Component;
  let fixture: ComponentFixture<Temario2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temario2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

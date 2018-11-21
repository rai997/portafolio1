import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisInmunologicoComponent } from './sis-inmunologico.component';

describe('SisInmunologicoComponent', () => {
  let component: SisInmunologicoComponent;
  let fixture: ComponentFixture<SisInmunologicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisInmunologicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisInmunologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

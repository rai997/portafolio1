import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistematicasComponent } from './sistematicas.component';

describe('SistematicasComponent', () => {
  let component: SistematicasComponent;
  let fixture: ComponentFixture<SistematicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistematicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

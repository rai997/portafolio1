import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisEsqueleticoComponent } from './sis-esqueletico.component';

describe('SisEsqueleticoComponent', () => {
  let component: SisEsqueleticoComponent;
  let fixture: ComponentFixture<SisEsqueleticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisEsqueleticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisEsqueleticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

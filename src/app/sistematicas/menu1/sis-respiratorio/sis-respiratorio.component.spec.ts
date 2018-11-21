import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisRespiratorioComponent } from './sis-respiratorio.component';

describe('SisRespiratorioComponent', () => {
  let component: SisRespiratorioComponent;
  let fixture: ComponentFixture<SisRespiratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisRespiratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisRespiratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

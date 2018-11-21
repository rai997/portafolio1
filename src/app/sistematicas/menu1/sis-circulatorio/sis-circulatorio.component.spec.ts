import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisCirculatorioComponent } from './sis-circulatorio.component';

describe('SisCirculatorioComponent', () => {
  let component: SisCirculatorioComponent;
  let fixture: ComponentFixture<SisCirculatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisCirculatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisCirculatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

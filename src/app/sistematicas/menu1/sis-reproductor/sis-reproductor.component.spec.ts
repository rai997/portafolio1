import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisReproductorComponent } from './sis-reproductor.component';

describe('SisReproductorComponent', () => {
  let component: SisReproductorComponent;
  let fixture: ComponentFixture<SisReproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisReproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisLinfaticoComponent } from './sis-linfatico.component';

describe('SisLinfaticoComponent', () => {
  let component: SisLinfaticoComponent;
  let fixture: ComponentFixture<SisLinfaticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisLinfaticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisLinfaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

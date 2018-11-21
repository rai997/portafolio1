import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisDigestivoComponent } from './sis-digestivo.component';

describe('SisDigestivoComponent', () => {
  let component: SisDigestivoComponent;
  let fixture: ComponentFixture<SisDigestivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisDigestivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisDigestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

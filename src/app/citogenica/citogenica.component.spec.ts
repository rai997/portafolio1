import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitogenicaComponent } from './citogenica.component';

describe('CitogenicaComponent', () => {
  let component: CitogenicaComponent;
  let fixture: ComponentFixture<CitogenicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitogenicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitogenicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisUrinarioComponent } from './sis-urinario.component';

describe('SisUrinarioComponent', () => {
  let component: SisUrinarioComponent;
  let fixture: ComponentFixture<SisUrinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisUrinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisUrinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

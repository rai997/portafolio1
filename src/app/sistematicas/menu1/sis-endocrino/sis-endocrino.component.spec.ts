import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisEndocrinoComponent } from './sis-endocrino.component';

describe('SisEndocrinoComponent', () => {
  let component: SisEndocrinoComponent;
  let fixture: ComponentFixture<SisEndocrinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisEndocrinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisEndocrinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

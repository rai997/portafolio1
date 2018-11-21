import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisNerviosoComponent } from './sis-nervioso.component';

describe('SisNerviosoComponent', () => {
  let component: SisNerviosoComponent;
  let fixture: ComponentFixture<SisNerviosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisNerviosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisNerviosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

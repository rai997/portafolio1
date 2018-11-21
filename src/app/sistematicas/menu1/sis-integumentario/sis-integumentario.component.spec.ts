import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisIntegumentarioComponent } from './sis-integumentario.component';

describe('SisIntegumentarioComponent', () => {
  let component: SisIntegumentarioComponent;
  let fixture: ComponentFixture<SisIntegumentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisIntegumentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisIntegumentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

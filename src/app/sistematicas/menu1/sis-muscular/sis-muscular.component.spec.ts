import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisMuscularComponent } from './sis-muscular.component';

describe('SisMuscularComponent', () => {
  let component: SisMuscularComponent;
  let fixture: ComponentFixture<SisMuscularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisMuscularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisMuscularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

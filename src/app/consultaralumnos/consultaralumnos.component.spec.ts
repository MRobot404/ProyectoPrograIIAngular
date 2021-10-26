import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaralumnosComponent } from './consultaralumnos.component';

describe('ConsultaralumnosComponent', () => {
  let component: ConsultaralumnosComponent;
  let fixture: ComponentFixture<ConsultaralumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaralumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaralumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

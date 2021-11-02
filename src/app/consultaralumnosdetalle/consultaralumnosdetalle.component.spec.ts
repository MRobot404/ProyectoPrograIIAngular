import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaralumnosdetalleComponent } from './consultaralumnosdetalle.component';

describe('ConsultaralumnosdetalleComponent', () => {
  let component: ConsultaralumnosdetalleComponent;
  let fixture: ComponentFixture<ConsultaralumnosdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaralumnosdetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaralumnosdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

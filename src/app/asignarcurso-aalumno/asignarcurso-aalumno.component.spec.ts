import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarcursoAalumnoComponent } from './asignarcurso-aalumno.component';

describe('AsignarcursoAalumnoComponent', () => {
  let component: AsignarcursoAalumnoComponent;
  let fixture: ComponentFixture<AsignarcursoAalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarcursoAalumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarcursoAalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

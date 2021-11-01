import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarcursoComponent } from './actualizarcurso.component';

describe('ActualizarcursoComponent', () => {
  let component: ActualizarcursoComponent;
  let fixture: ComponentFixture<ActualizarcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarcursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

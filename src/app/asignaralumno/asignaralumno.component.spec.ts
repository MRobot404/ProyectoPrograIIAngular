import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaralumnoComponent } from './asignaralumno.component';

describe('AsignaralumnoComponent', () => {
  let component: AsignaralumnoComponent;
  let fixture: ComponentFixture<AsignaralumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaralumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

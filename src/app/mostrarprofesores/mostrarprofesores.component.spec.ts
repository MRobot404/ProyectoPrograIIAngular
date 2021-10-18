import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarprofesoresComponent } from './mostrarprofesores.component';

describe('MostrarprofesoresComponent', () => {
  let component: MostrarprofesoresComponent;
  let fixture: ComponentFixture<MostrarprofesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarprofesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarprofesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

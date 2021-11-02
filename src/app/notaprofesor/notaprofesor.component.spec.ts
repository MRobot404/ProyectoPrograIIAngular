import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaprofesorComponent } from './notaprofesor.component';

describe('NotaprofesorComponent', () => {
  let component: NotaprofesorComponent;
  let fixture: ComponentFixture<NotaprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaprofesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

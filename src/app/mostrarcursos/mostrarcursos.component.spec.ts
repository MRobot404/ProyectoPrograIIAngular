import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarcursosComponent } from './mostrarcursos.component';

describe('MostrarcursosComponent', () => {
  let component: MostrarcursosComponent;
  let fixture: ComponentFixture<MostrarcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarcursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

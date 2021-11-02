import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaralumnosverComponent } from './consultaralumnosver.component';

describe('ConsultaralumnosverComponent', () => {
  let component: ConsultaralumnosverComponent;
  let fixture: ComponentFixture<ConsultaralumnosverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaralumnosverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaralumnosverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

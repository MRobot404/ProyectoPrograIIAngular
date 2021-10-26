import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultacursoprofesorComponent } from './consultacursoprofesor.component';

describe('ConsultacursoprofesorComponent', () => {
  let component: ConsultacursoprofesorComponent;
  let fixture: ComponentFixture<ConsultacursoprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultacursoprofesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultacursoprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

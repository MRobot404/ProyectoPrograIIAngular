import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearalumnosComponent } from './crearalumnos.component';

describe('CrearalumnosComponent', () => {
  let component: CrearalumnosComponent;
  let fixture: ComponentFixture<CrearalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearalumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

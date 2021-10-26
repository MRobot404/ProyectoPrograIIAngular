import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprofesorComponent } from './homeprofesor.component';

describe('HomeprofesorComponent', () => {
  let component: HomeprofesorComponent;
  let fixture: ComponentFixture<HomeprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprofesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

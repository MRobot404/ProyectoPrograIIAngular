import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotafinalComponent } from './notafinal.component';

describe('NotafinalComponent', () => {
  let component: NotafinalComponent;
  let fixture: ComponentFixture<NotafinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotafinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotafinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

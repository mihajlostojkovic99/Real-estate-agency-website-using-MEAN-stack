import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistracijeComponent } from './admin-registracije.component';

describe('AdminRegistracijeComponent', () => {
  let component: AdminRegistracijeComponent;
  let fixture: ComponentFixture<AdminRegistracijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegistracijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistracijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

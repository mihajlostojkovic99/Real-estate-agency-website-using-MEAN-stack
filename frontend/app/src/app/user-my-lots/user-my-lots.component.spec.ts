import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyLotsComponent } from './user-my-lots.component';

describe('UserMyLotsComponent', () => {
  let component: UserMyLotsComponent;
  let fixture: ComponentFixture<UserMyLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyLotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

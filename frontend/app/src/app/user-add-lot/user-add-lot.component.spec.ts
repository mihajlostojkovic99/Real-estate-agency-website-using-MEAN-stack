import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddLotComponent } from './user-add-lot.component';

describe('UserAddLotComponent', () => {
  let component: UserAddLotComponent;
  let fixture: ComponentFixture<UserAddLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddLotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

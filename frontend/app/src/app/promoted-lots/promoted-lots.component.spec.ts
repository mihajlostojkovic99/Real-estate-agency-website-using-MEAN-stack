import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedLotsComponent } from './promoted-lots.component';

describe('PromotedLotsComponent', () => {
  let component: PromotedLotsComponent;
  let fixture: ComponentFixture<PromotedLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotedLotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotedLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

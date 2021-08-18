import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentsComponent } from './percents.component';

describe('PercentsComponent', () => {
  let component: PercentsComponent;
  let fixture: ComponentFixture<PercentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

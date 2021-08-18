import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerLotsComponent } from './worker-lots.component';

describe('WorkerLotsComponent', () => {
  let component: WorkerLotsComponent;
  let fixture: ComponentFixture<WorkerLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerLotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

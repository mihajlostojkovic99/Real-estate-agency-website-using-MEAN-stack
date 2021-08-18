import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerAllLotsComponent } from './worker-all-lots.component';

describe('WorkerAllLotsComponent', () => {
  let component: WorkerAllLotsComponent;
  let fixture: ComponentFixture<WorkerAllLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerAllLotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerAllLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

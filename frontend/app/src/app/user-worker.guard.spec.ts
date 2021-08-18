import { TestBed } from '@angular/core/testing';

import { UserWorkerGuard } from './user-worker.guard';

describe('UserWorkerGuard', () => {
  let guard: UserWorkerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserWorkerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

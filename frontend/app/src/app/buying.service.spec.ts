import { TestBed } from '@angular/core/testing';

import { BuyingService } from './buying.service';

describe('BuyingService', () => {
  let service: BuyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

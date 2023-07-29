import { TestBed } from '@angular/core/testing';

import { PengembalianService } from './pengembalian.service';

describe('PengembalianService', () => {
  let service: PengembalianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PengembalianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

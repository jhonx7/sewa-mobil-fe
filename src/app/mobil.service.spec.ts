import { TestBed } from '@angular/core/testing';

import { MobilService } from './mobil.service';

describe('MobilService', () => {
  let service: MobilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

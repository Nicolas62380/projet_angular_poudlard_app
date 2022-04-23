import { TestBed } from '@angular/core/testing';

import { SorcierService } from './sorcier.service';

describe('SorcierService', () => {
  let service: SorcierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorcierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ZaneService } from './zane.service';

describe('ZaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZaneService = TestBed.get(ZaneService);
    expect(service).toBeTruthy();
  });
});

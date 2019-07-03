import { TestBed } from '@angular/core/testing';

import { AmaraService } from './amara.service';

describe('AmaraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmaraService = TestBed.get(AmaraService);
    expect(service).toBeTruthy();
  });
});

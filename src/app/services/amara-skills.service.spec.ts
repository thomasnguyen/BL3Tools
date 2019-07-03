import { TestBed } from '@angular/core/testing';

import { AmaraSkillsService } from './amara-skills.service';

describe('AmaraSkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmaraSkillsService = TestBed.get(AmaraSkillsService);
    expect(service).toBeTruthy();
  });
});

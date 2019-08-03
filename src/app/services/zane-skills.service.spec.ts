import { TestBed } from '@angular/core/testing';

import { ZaneSkillsService } from './zane-skills.service';

describe('ZaneSkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZaneSkillsService = TestBed.get(ZaneSkillsService);
    expect(service).toBeTruthy();
  });
});

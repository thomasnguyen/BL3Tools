import { Injectable } from '@angular/core';
import { ZaneSkillsService } from './zane-skills.service';

@Injectable({
  providedIn: 'root'
})
export class ZaneService {

  constructor(
    private zaneSkillsSvc: ZaneSkillsService,
  ) { }

  getBlankSlate(): string {
    return this.zaneSkillsSvc.getBlankSlate();
  }
}

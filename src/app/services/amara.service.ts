import { Injectable } from '@angular/core';
import { AmaraSkillsService } from './amara-skills.service';

@Injectable({
  providedIn: 'root'
})
export class AmaraService {

  constructor(
    private amaraSkillsSvc: AmaraSkillsService,
  ) { }

  getBlankSlate(): string {
    return this.amaraSkillsSvc.getBlankSlate();
  }

}

import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class ZaneSkillsService {
  public underCover: Skill[] = [];
  public hitman: Skill[] = [];
  public doubledAgent: Skill[] = [];

  constructor() { }

  getBlankSlate(): string {
    const buildLength = 0;
    return '0'.repeat(buildLength);
  }
}

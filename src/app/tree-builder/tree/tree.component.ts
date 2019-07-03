import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Skill } from 'src/app/models/skill.model';
import { first } from 'rxjs/operators';

import { BuildService } from '../../services/build.service';
import { Character } from 'src/app/models/character.model';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnChanges {
  maxPoints = 35;
  tier: number;
  isActionSkillSelected = [];
  augmentsSelected = [];
  tierLimit = [0, 5, 10, 15, 20, 25, 30];

  @Input() bgColor: string;
  @Input() treeName: string;
  @Input() tree: Skill[];
  @Input() chunkLocation: any[];
  @Input() treePoints: number;
  @Input() character: Character;
  @Input() totalPoints: number;
  @Input() treeMaxPoints: number;

  constructor(
    private buildSvc: BuildService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  getTier(totalSkillPoints: number): number {
    for (let x = 0; x < this.tierLimit.length; x++) {
      if (totalSkillPoints < this.tierLimit[x]) {
        if (x === 0) {
          return 0;
        } else {
          return x - 1;
        }
      }
    }

    // else return highest
    return 6;
  }

  ngOnChanges() {
  }

  onSpecialSkillSelect(skill: Skill) {
    if (skill.skillLimit === skill.skillCount || this.treePoints < (skill.position[0] - 1) * 5) {
      return;
    }

    // const skillCount = this.isActionSkillSelected ? 1 : 0;
    const { skillLocations, skillSelected } = this.buildSvc.updateSpecialSkill(skill, this.character.uid);
    this.setSpecialSkills(skillLocations, skillSelected);

    // this.updateRoute(skill.index, skillCount);
    return false;
  }

  setSpecialSkills(skillLocations: [], skillSelected: []) {
    this.route.paramMap.pipe(first()).subscribe(params => {
      const oldToken = params.get('build').split('');

      // reset token
      skillLocations.forEach(location => {
        oldToken[location] = '0';
      });

      // set token
      skillSelected.forEach(location => {
        oldToken[location] = '1';
      });

      const tokenRoute = oldToken.join('');
      this.router.navigate([`/tb/${this.character.name}/`, tokenRoute]);
    });
  }

  onIncreaseSkill(skill: Skill) {
    // do check to make sure it does not go over limit
    if (this.totalPoints >= this.treeMaxPoints ||
      skill.skillLimit === skill.skillCount || this.treePoints < (skill.position[0] - 1) * 5) {
      return;
    } else {
      // global skill point for tree
      // this.treePoints += 1;
      // update route
      this.updateRoute(skill.index, skill.skillCount + 1);
    }

  }


  onDecreaseSkill(skill: Skill) {
    // do check to make sure it does not go over limit
    if (skill.skillCount === 0) {
      return false;
    } else {
      // global skill point for tree

      if (this.treePoints % 10 === 1 || this.treePoints % 10 === 6) {
        if ((skill.position[0] + 1) * 5 < this.treePoints) {
          return false;
        }
      }

      // update route
      this.updateRoute(skill.index, skill.skillCount - 1);
      return false;

    }

  }

  updateRoute(index: number, count: number): void {
    this.route.paramMap.pipe(first()).subscribe(params => {
      const oldToken = params.get('build').split('');
      oldToken[index] = count + '';
      const tokenRoute = oldToken.join('');
      console.log(this.character);
      this.router.navigate([`/tb/${this.character.name}/`, tokenRoute]);
    });

  }
}

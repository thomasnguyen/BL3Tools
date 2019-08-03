import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Skill } from 'src/app/models/skill.model';
import { first } from 'rxjs/operators';

import { BuildService } from '../../services/build.service';
import { Character } from 'src/app/models/character.model';
import { ToastrService } from 'ngx-toastr';
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


  @Input() treeTier: number;


  constructor(
    private buildSvc: BuildService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
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
    const { skillLocations, skillSelected } = this.buildSvc.updateSpecialSkill(skill, this.character.uid);


    if (this.treePoints < (skill.position[0] - 1) * 5) {
      return;
    } else if (skill.skillLimit === skill.skillCount) {
      skill.skillCount = 0;

      this.unselectSpecial(skillLocations, skillSelected);
      return;
    }

    // const skillCount = this.isActionSkillSelected ? 1 : 0;
    this.setSpecialSkills(skillLocations, skillSelected);

    // this.updateRoute(skill.index, skillCount);
    return false;
  }

  unselectSpecial(skillLocations: [], skillSelected: []) {
    this.route.paramMap.pipe(first()).subscribe(params => {
      const oldToken = params.get('build').split('');

      // reset token
      skillLocations.forEach(location => {
        oldToken[location] = '0';
      });

      // set token
      skillSelected.forEach(location => {
        oldToken[location] = '0';
      });

      const tokenRoute = oldToken.join('');
      this.router.navigate([`/tb/${this.character.name}/`, tokenRoute]);
    });
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
    if (skill.skillLimit === skill.skillCount || this.treePoints < (skill.position[0] - 1) * 5) {
      return;
    } else if (this.totalPoints >= this.treeMaxPoints) {
      this.toastr.error('ERR: Skill limit reached');
    } else {
      // global skill point for tree
      // this.treePoints += 1;
      // update route
      this.updateRoute(skill.index, skill.skillCount + 1);
    }

  }


  onDecreaseSkill(skill: Skill) {
    if (!(this.treePoints >= (skill.position[0] - 1) * 5) && !(skill.position[0] <= 1)) {
      return false;
    }


    const willDeselectLowerTier = (this.treePoints - 1) / 5 < this.treeTier && skill.position[0] - 1 < this.treeTier;
    // do check to make sure it does not go over limit
    if (skill.skillCount === 0 || willDeselectLowerTier) {
      this.toastr.error('ERR: You may not unselect skill if it decreases skill');
      return false;
    } else {

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
      this.router.navigate([`/tb/${this.character.name}/`, tokenRoute]);
    });

  }
}

import { Injectable } from '@angular/core';
import { AmaraSkillsService } from './amara-skills.service';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  tierLimit: number[] = [0, 5, 10, 15, 20, 25];

  constructor(
    private amaraSkillsSvc: AmaraSkillsService
  ) { }


  getTrueRoute(builds: any): string {
    const buildArray = [];
    for (let x = 0; x < builds.length; x++) {
      builds[x].builds.forEach(skill => {
        if (skill !== 'x') {
          buildArray.push(skill.skillCount);
        }
      });
    }
    return buildArray.join('');
  }

  updateSpecialSkill(skill: Skill, charID): any {
    // if amara's acton-skills
    if (charID === 2) {
      return {
        skillLocations: this.amaraSkillsSvc.getSpecialLocations(skill.type),
        skillSelected: [skill.index],
      };
    }
  }


  getSkillSet(charID: number): any[] {
    if (charID === 2) {
      return this.amaraSkillsSvc.getSkillSet();
    } else {
      // default
      return [];
    }
  }

  getBuildChunks(skillSet: any[]): any[] {
    return [
      [0, skillSet[0].length]
      ,
      [skillSet[0].length, skillSet[0].length + skillSet[1].length]
      ,
      [skillSet[0].length + skillSet[1].length, skillSet[0].length + skillSet[1].length + skillSet[2].length
      ]];
  }

  getBuildMap(): any {
    return [
      ['x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', 'x'],
    ];
  }

  createBuild(treeBuild: Skill[], tokenString: string): any {
    const buildToken = tokenString.split('');
    const buildMap = this.getBuildMap();
    const tree = treeBuild;
    let treePoints = 0;

    for (let x = 0; x < tree.length; x++) {
      const posX = tree[x].position[1];
      const posY = tree[x].position[0];

      if (+tokenString[x] > tree[x].skillLimit) {
        tree[x].skillCount = tree[x].skillLimit;
      } else {
        tree[x].skillCount = +buildToken[x];
      }

      if (tree[x].type === 'skill') {
        treePoints += tree[x].skillCount;
      }
      buildMap[posY][posX] = tree[x];
    }

    return {
      builds: this.cleanBuild(buildMap.flat()),
      treePoints: treePoints
    };
  }


  getTreeInfo(charID): any {
    if (charID === 2) {
      return this.amaraSkillsSvc.getTreeInfo();
    }
  }

  getSpecials(type: string, skillSet: any[]): any {
    const specialArray = [];
    skillSet.forEach(tree => {
      tree.forEach(skill => {
        if (skill.type === type) {
          specialArray.push(skill);
        }
      });
    });
    return specialArray;
  }

  getEquippedSkills(token: string, skillSet: any[]): any {
    // check for locations
    const equipArray = [];
    const actionSkillSelectedIndex = [];
    const augmentSkillSelectedIndex = [];
    const elementSkillSelectedIndex = [];
    // get actionSkill
    const actionSkillLocations = this.getSpecials('action-skill', skillSet);

    actionSkillLocations.forEach(actionSkill => {
      if (token[actionSkill.index] === '1') {
        actionSkillSelectedIndex.push(actionSkill.index);

        actionSkill.skillCount = 1;
        equipArray.push(actionSkill);
      }
    });

    if (!actionSkillSelectedIndex.length) {
      equipArray.push('blank-actionSkill');
    }

    const augmentSkillLocations = this.getSpecials('augment', skillSet);
    augmentSkillLocations.forEach(augmentSkill => {
      if (token[augmentSkill.index] === '1') {
        augmentSkillSelectedIndex.push(augmentSkill.index);

        augmentSkill.skillCount = 1;
        equipArray.push(augmentSkill);
      }
    });

    if (!augmentSkillSelectedIndex.length) {
      equipArray.push('blank-augmentSkill');
    }

    const elementSkillLocations = this.getSpecials('element', skillSet);

    elementSkillLocations.forEach(elementSkill => {
      if (token[elementSkill.index] === '1') {
        elementSkillSelectedIndex.push(elementSkill.index);

        elementSkill.skillCount = 1;
        equipArray.push(elementSkill);
      }
    });

    if (!elementSkillSelectedIndex.length) {

      equipArray.push('blank-elementSkill');
    }

    return {
      equipArray: equipArray,
      actionSkillSelected: actionSkillSelectedIndex,
      augmentSkillSelected: augmentSkillLocations,
      elementSkillSelected: elementSkillLocations,
    };
  }

  getTier(count: number): number {
    for (let x = 0; x < this.tierLimit.length; x++) {
      if (count < this.tierLimit[x]) {
        if (x === 0) {
          return 0;
        } else {
          return x - 1;
        }

      }
    }
    return 10;
  }

  cleanBuild(build: any[]): any {
    // 1. traverse through tiers
    let totalSkillCount = 0;
    for (let x = 0; x < build.length; x++) {
      const skill = build[x];
      if (skill !== 'x') {
        const tier = build[x].position[0] - 1;

        if (skill.type === 'skill') {
          if (tier > this.getTier(totalSkillCount)) {
            build[x].skillCount = 0;
          } else {
            totalSkillCount += build[x].skillCount;
          }
        }

      }

    }
    return build;
  }

  public getTrees(charID: number, token: string): any {
    const treeInfo = this.getTreeInfo(charID);
    const skillSet: any[] = this.getSkillSet(charID);

    const buildChunks: any[] = this.getBuildChunks(skillSet);

    const buildTokens = buildChunks.map(indices => {
      return token.slice(...indices);
    }
    );
    const trees = buildTokens.map((tokenBuild, idx) => {
      return this.createBuild(skillSet[idx], tokenBuild);
    });

    const trueRoute = this.getTrueRoute(trees);
    return {
      totalPoints: trees.reduce((acc, tree) => tree.treePoints + acc),
      equippedSkills: this.getEquippedSkills(trueRoute, skillSet),
      builds:
        trees.map((tree, idx) => {
          return {
            name: treeInfo[idx].name,
            color: treeInfo[idx].color,
            build: tree.builds,
            chunkLocation: buildChunks[idx],
            treePoints: tree.treePoints,
          };
        })
    };
  }
}

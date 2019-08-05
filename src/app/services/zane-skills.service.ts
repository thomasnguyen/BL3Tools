import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class ZaneSkillsService {
  public hitman: Skill[] = [
    {
      name: 'SNTNL',
      image: '',
      description: `Send into battle an automated SNTNL drone that
      continually flies through the environment and attacks enemies with its Machine Guns.
      Pressing the Action Skill button while SNTNL is active causes it to attack the enemy under Zane's crosshairs, if any.	`,
      type: 'action-skill',
      skillLimit: 1,
      position: [0, 2],
      skillCount: 0,

      getEffect: (rank) => `
          10 Machine Gun Damage, 24 second Duration, 36-second Cooldown
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Violent Speed',
      image: '',
      description: `Kill Skill. After killing an enemy, Zane gains increased Movement Speed for a few seconds.`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 1],
      skillCount: 0,

      getEffect: (rank) => `
        ${rank * 4}% Movement Speed, 8 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Cold Bore',
      image: '',
      description: `Zane gains increased Weapon Swap Speed. The next shot fired after swapping weapons deals Bonus Cryo Damage.	`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 2],
      skillCount: 0,

      getEffect: (rank) => `
        ${rank * 15}% Weapon Swap Speed, ${rank * 6}% Bonus Cryo Damage
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Violent Momentum',
      image: '',
      description: `Zane's Gun Damage is increased while moving. The quicker he moves, the greater the Gun Damage bonus.`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 3],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 6}% bonus Gun Damage at default walk speed
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Winter's Drone`,
      image: '',
      description: `Converts SNTNL's primary weapons to Cryo Damage.`,
      type: 'augment',
      skillLimit: 1,
      position: [2, 0],
      skillCount: 0,

      getEffect: (rank) => `
        Converts SNTNL Weapon Damage to Cryo
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Cool Hand`,
      image: '',
      description: `Zane gains increased Reload Speed.
      Kill Skill. After killing an enemy, Zane's Reload Speed is increased for a few seconds.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 1],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 3}% Reload Speed after kill, ${rank * 2}% Reload Speed, 8 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Drone Delivery`,
      image: '',
      description: `SNTNL will occasionally drop a free grenade based on your current grenade mod while attacking enemies.`,
      type: 'skill',
      skillLimit: 1,
      position: [2, 2],
      skillCount: 0,

      getEffect: (rank) => `
      15 second Cooldown
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Salvation`,
      image: '',
      description: `Kill Skill. After killing an enemy, Zane's weapons gain Life Steal for a few seconds.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 3],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 4}% Life Steal on damage dealt, 8 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Bad Dose`,
      image: '',
      description: `SNTNL occasionally shoots out a beam of Radiation that weakens enemies and buffs Zane.
      For every weakened enemy, Zane's Movement Speed and Fire Rate are increased.
      Weakened enemies have decreased Movement Speed and Attack Speed.`,
      type: 'augment',
      skillLimit: 1,
      position: [3, 1],
      skillCount: 0,

      getEffect: (rank) => `
      3% Fire Rate per enemy, 6% Movement Speed per enemy, 2 Damage, 12 second Duration, 8 second Cooldown

      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Seein' Red`,
      image: '',
      description: `Activating an Action Skill automatically activates all of Zane's Kill Skills.	`,
      type: 'skill',
      skillLimit: 1,
      position: [3, 2],
      skillCount: 0,

      getEffect: (rank) => ``,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Static Field`,
      image: '',
      description: `SNTNL emits a static field that sends a Shock beam to nearby enemies, draining their shields and replenishing Zane's.	`,
      type: 'augment',
      skillLimit: 1,
      position: [3, 4],
      skillCount: 0,

      getEffect: (rank) => `
        2 Shield Damage per second, 2 second Cooldown
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Boomsday`,
      image: '',
      description: `SNTNL adds a rocket pod to its primary weapons, allowing it to shoot rockets as well as machine guns.`,
      type: 'augment',
      skillLimit: 1,
      position: [4, 0],
      skillCount: 0,

      getEffect: (rank) => `
        50 Rocket Damage
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Violent Violence`,
      image: '',
      description: `SKill Skill. After killing an enemy, Zane gains increased Fire Rate for a few seconds.`,
      type: 'skill',
      skillLimit: 5,
      position: [4, 1],
      skillCount: 0,

      getEffect: (rank) => `
        ${rank * 4}% Fire Rate, 8 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Playing Dirty`,
      image: '',
      description: `Kill Skill. After killing an enemy, Zane's next five shots all have a chance to fire an additional projectile.`,
      type: 'skill',
      skillLimit: 5,
      position: [4, 3],
      skillCount: 0,

      getEffect: (rank) => `
        ${rank * 10}% Extra Shot Chance
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Almighty Ordnance`,
      image: '',
      description: `Hold down the Action Skill button while SNTNL is deployed to paint a target area.
      SNTNL fires a missile barrage at the area, and if an enemy is killed,
      Almighty Ordinance duration is reset. This can only be used once per Action Skill use.`,
      type: 'augment',
      skillLimit: 1,
      position: [4, 4],
      skillCount: 0,

      getEffect: (rank) => `
        25 Missile Damage, 5 Missiles per Barrage
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Good Misfortune`,
      image: '',
      description: `Kill Skill. Killing an enemy increases Zane's Action Skill Duration. This skill has diminishing returns.`,
      type: 'skill',
      skillLimit: 3,
      position: [5, 2],
      skillCount: 0,

      getEffect: (rank) => `
        Up to ${rank * 5} % max duration Duration Return
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Death Follows Close`,
      image: '',
      description: `All of Zane's Kill Skills gain increased effect and duration.`,
      type: 'skill',
      skillLimit: 1,
      position: [6, 2],
      skillCount: 0,

      getEffect: (rank) => `
        40% Kill Skill Bonus, 4 second Kill Skill Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
  ];
  public underCover: Skill[] = [];
  public doubledAgent: Skill[] = [];

  constructor() { }

  getBlankSlate(): string {
    const buildLength = 0;
    return '0'.repeat(buildLength);
  }
}

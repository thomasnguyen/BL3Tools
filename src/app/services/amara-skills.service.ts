import { Injectable } from '@angular/core';

import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class AmaraSkillsService {
  /* TODOS:  */
  // 1. add tierLimit to each skill
  // 2. check
  treePoints = 0;
  tierLimit: number[] = [0, 5, 10, 15, 20, 25];
  actionSkillSelected: Skill;
  public fistOfTheElements: Skill[] = [
    {
      // index: 38,
      name: 'Phasegrasp',
      image: '',
      description: `Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds.
      Some enemies are immune to being grasped and instantly take damage instead.`,
      type: 'action-skill',
      skillLimit: 1,
      position: [0, 2],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Duration:</b> 7 seconds <br>
      <b>Cooldown:</b> 13 seconds
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },

    {
      // index: 38,
      name: 'Anima',
      image: '',
      description: `Amara's elemental effects deal increased damage over time and have increased duration.
      Her action skill elemental effect deals further increased damage.`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 1],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Elemental Effect Damage:</b> +${rank * 2}%  <br>
      <b>Elemental Effect Duration:</b> +${rank * 10}%  <br>
      <b>Action Skill Elemental Effect Damage:</b> +${rank * 6}%  <br>
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 38,
      name: 'Steady Hand(s)',
      image: '',
      description: `Amara gains increased weapon handling and accuracy.`,
      type: 'skill',
      skillLimit: 3,
      position: [1, 2],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Handling:</b> +${rank * 12}%  <br>
      <b>Accuracy:</b> +${rank * 10}%
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 39,
      name: 'Infusion',
      image: '',
      description: `Convert a portion of damage dealt by Amara's weapons into her action skill element.`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 3],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Converted Damage:</b> +${rank * 4}%
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 40,
      name: 'Tempest',
      image: '',
      description: `Amara deals increased elemental damage. Shock damage is further increased.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 1],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Shock Damage:</b> +${rank * 8}%
      <b>Elemental Damage:</b> +${rank * 4}%
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 41,
      name: 'Illuminated Fist',
      image: '',
      description: `Amara gains increased melee damage and
      her melee damage is converted to her action skill element.`,
      type: 'skill',
      skillLimit: 1,
      position: [2, 2],
      skillCount: 0,

      getEffect: (rank) => `
      Melee Damage: +28%
      `,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 42,
      name: 'Wildfire',
      image: '',
      description: `Whenever Amara applies an elemental effect to an enemy,
      it has a chance to spread to a nearby enemy.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 3],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Spread Chance</b>: ${rank * 8}%
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 43,
      name: 'Soul Fire',
      image: '',
      description: `Converts Amara's action skill to fire damage.      `,
      type: 'element',
      skillLimit: 1,
      position: [2, 4],
      skillCount: 0,

      getEffect: (rank) => ``,

      getDescription: function (rank) {
        return this.description + this.getEffect(rank);
      }
    },
    {
      // index: 44,
      name: 'The Eternal Fist',
      image: '',
      description: `Amara summons a giant fist that bursts from the ground and locks the targeted enemy
       in place for a few seconds. Whenever the grasped enemy is killed, up to 3 new targets can be sought out and grasped.
      `,
      type: 'action-skill',
      skillLimit: 1,
      position: [3, 0],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Bonus Targets:</b> up to +4 <br>
      <b>Cooldown:</b> 23 seconds`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 45,
      name: 'Dread',
      image: '',
      description: `Amara's gun damage is increased for a few seconds after an enemy is grasped.
      Whenever any player kills a grasped enemy, their current weapon is instantly reloaded.
      `,
      type: 'skill',
      skillLimit: 1,
      position: [3, 2],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Weapon Damage: </b> +10% <br>
      <b>Duration:</b> 8 seconds`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 46,
      name: 'Allure',
      image: '',
      description: `Amara's action skill creates singularities that pull in enemies.`,
      type: 'augment',
      skillLimit: 1,
      position: [3, 4],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Action Skill Damage:</b> -25% <br>
      <b>Duration:</b> 2.5 seconds`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 47,
      name: 'Indiscriminate',
      image: '',
      description: `
      Amara's bullets that damage enemies have a chance to ricochet and
      deal decreased damage to other nearby enemies.
      Ricochet chance and damage are increased if the target is currently affected by Phasegrasp or Stillness of Mind.
      `,
      type: 'skill',
      skillLimit: 3,
      position: [4, 1],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Ricochet Chance:</b> 10%  <br>
      <b>Ricochet Damage:</b> -50% <br>
      <b>Action Skill Ricochet Chance: </b> 20%  <br>
      <b>Action Skill Ricochet Damage:</b> -25%
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 48,
      name: 'Deep Well',
      image: '',
      description: `
      Amara gains increased magazine size with elemental weapons.
      `,
      type: 'skill',
      skillLimit: 1,
      position: [4, 2],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Ricochet Chance:</b> ${rank * 10}%  <br>
      <b>Ricochet Damage:</b> -${rank * 50}% <br>
      <b>Action Skill Ricochet Chance:</b> ${rank * 20}%  <br>
      <b>Action Skill Ricochet Damage:</b> -${rank * 25}%
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 49,
      name: 'Catharsis',
      image: '',
      description: `
      Whenever Amara triggers an elemental effect on an enemy,
      when that enemy dies that enemy explodes, dealing her attuned element damage along with any other element
      that is currently inflicted upon that enemy. This skill has a short cooldown.
      `,
      type: 'skill',
      skillLimit: 3,
      position: [4, 3],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Cooldown:</b> 8 seconds
      `,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 50,
      name: 'Ties that Bind',
      image: '',
      description: `
      Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds.
      Enemies near the grasped target are linked, and any damage dealt to a linked target is shared between all other linked targets.
      `,
      type: 'action-skill',
      skillLimit: 1,
      position: [4, 4],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Link Damage:</b> 35% of damage dealt
      <b>Cooldown:</b> 17 seconds
      `,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 50,
      name: 'Fist Over Matter',
      image: '',
      description: `
      Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds.
      After Grasping the targeted enemy, large fists appear and constantly smash the area, dealing damage to nearby enemies.
      `,
      type: 'action-skill',
      skillLimit: 1,
      position: [5, 0],
      skillCount: 0,

      getEffect: (rank) => `
      `,

      getDescription: function (rank) {
        return this.description;
      }
    },
    {
      // index: 51,
      name: 'Sustainment',
      image: '',
      description: `
        Amara gains Life Steal whenever she deals elemental damage with her weapon.
      `,
      type: 'skill',
      skillLimit: 5,
      position: [5, 1],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Life Steal:</b> ${rank * 4}%
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 52,
      name: 'Conflux',
      image: '',
      description: `
       Whenever Amara applies an elemental effect to an enemy,
       she gains a chance to randomly electrocute, burn, or melt that enemy.
      `,
      type: 'skill',
      skillLimit: 5,
      position: [5, 3],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Extra Effect Chance:</b> ${rank * 7}%
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 53,
      name: 'Forceful Expression',
      image: '',
      description: `
      Amara's guns deal bonus elemental damage based on her action skill element.
      `,
      type: 'skill',
      skillLimit: 1,
      position: [6, 2],
      skillCount: 0,

      getEffect: (rank) => `
     <b>Bonus Elemental Damage:</b> 11% of damage dealt
      `,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
  ];
  public mysticalAssault: Skill[] = [
    {
      // index: 19,
      name: 'Phasecast',
      image: '',
      description: 'Amara sends forward an Astral Projection of herself, dealing damage to everything in its path.',
      type: 'action-skill',
      skillLimit: 1,
      position: [0, 2],
      skillCount: 0,

      getEffect: (rank) => `
      <strong>Max Health:</strong> +${rank * 5}%  <br>
      <strong>Elemental Damage Reduction:</strong> +${rank * 12} %
      `,

      getDescription: function (rank) {
        return this.description + this.getEffect(rank);
      }
    },
    {
      // index: 19,
      name: 'Do Harm',
      image: '',
      description: `Killing an enemy grants Amara a stack of Rush. Activating her action skill consumes all Rush stacks. For every stack of Rush consumed, Amara's action skill damage is temporarily increased.`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 1],
      skillCount: 0,

      getEffect: (rank) => `
      <b>Action Skill Damage</b>: +${0.6 * rank}% per stack consumed <br>
      <b>Max Rush Stacks:</b> 10 <br>
      <b>Duration:</b> 20 seconds
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 20,
      name: 'Fast Hand(s)',
      image: '',
      description: 'Amara gains increased max health and elemental damage resistance to her action skill element. <br />',
      type: 'skill',
      skillLimit: 3,
      position: [1, 2],

      getEffect: (rank) => `
      <b>Reload Speed:</b> +${rank * 4}%  <br>
      <b>Weapon Swap Speed:</b> +${rank * 22}%  <br>
      <b>Mode Switch Speed:</b> +${rank * 21}%
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 21,
      name: 'Violent Tapestry',
      image: '',
      description: 'Amara gains increased max health and elemental damage resistance to her action skill element. <br />',
      type: 'skill',
      skillLimit: 5,
      position: [1, 3],

      getEffect: (rank) => `
      <b>Effect Chance:</b> +${rank * 0.6}% per stack consumed <br>
      <b>Max Rush Stacks:</b> 10 <br>
      <b>Duration:</b> 5 seconds
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 22,
      name: 'Alacrity',
      image: '',
      description: `Amara gains increased reload speed for every stack of Rush.
      After consuming Rush stacks, this bonus is increased for a few seconds.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 1],

      getEffect: (rank) => `
      <b>Reload Speed:</b> +${rank * 0.4}% per stack
      <b>Reload Speed:</b> +${rank * 0.6}% per stack after action skill use
      <b>Duration:</b> 8 seconds
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 23,
      name: 'Transcend',
      image: '',
      description: `Amara gains increased accuracy
      and critical hit bonus for a few seconds after activating her action skill.`,
      type: 'skill',
      skillLimit: 3,
      position: [2, 2],

      getEffect: (rank) => `
      <b>Accuracy:</b> +${rank * 11}%  <br>
      <b>Critical Hit Bonus:</b> +${rank * 9}%  <br>
      <b>Duration:</b> 8 seconds
      `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 24,
      name: 'Restless',
      image: '',
      description: `Amara gains increased action skill cooldown rate.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 3],

      getEffect: (rank) => `<b>Cooldown Rate:</b> +${rank * 4}% `,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 25,
      name: 'Soul Sap',
      image: '',
      description: `A portion of damage dealt by Amara's action skill is returned to her or a nearby ally as health.`,
      type: 'augment',
      skillLimit: 1,
      position: [2, 4],

      getEffect: (rank) => `Life Steal: 30% of skill damage dealt`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 26,
      name: 'Reverberation',
      image: '',
      description: `Amara sends forward an Astral Projection of herself,
      dealing damage to everything in its path. Astral Projection deals increased damage for every enemy it hits.`,
      type: 'action-skill',
      skillLimit: 1,
      position: [3, 0],

      getEffect: (rank) => `
      <b>Damage Bonus:</b> +50% per enemy hit
      <b>Cooldown:</b> 24 seconds`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 27,
      name: 'Ascendant',
      image: '',
      description: `All action skill Augments gain increased effects.`,
      type: 'skill',
      skillLimit: 1,
      position: [3, 2],

      getEffect: (rank) => `
      <b>Soul Sap Lifesteal:</b> +20% <br>
      <b>Allure Radius:</b> +100% <br>
      <b>Glamour Duration:</b> +50% <br>
      <b>Bright Star Damage:</b> +25% <br>
      <b>Stillness of Mind:</b> Breaks 0.75 seconds after being damaged`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 28,
      name: 'Stillness of Mind',
      image: '',
      description: `Enemies damaged by Amara's action skill become phaselocked until they are damaged or the duration ends.
      However, action skill cooldown is increased. If Amara targets an enemy with Phasegrasp,
      enemies near the grasped target are phaselocked.
      `,
      type: 'augment',
      skillLimit: 1,
      position: [3, 4],

      getEffect: (rank) => `
      <b>Damage:</b> -35% <br>
      <b>Max Duration:</b> 6 seconds <br>
      <b>Cooldown:</b> +15%`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 29,
      name: 'Deliverance',
      image: '',
      description: `Amara sends forward an Astral Projection of herself,
      dealing damage to everything in its path. Whenever the Astral Projection hits an enemy,
      it releases homing elemental projectiles that trigger her action skill elemental effect on enemies.
      `,
      type: 'action-skill',
      skillLimit: 1,
      position: [4, 0],

      getEffect: (rank) => `
      <b>Elemental Projectiles:</b> 3 per enemy hit <br>
      <b>Cooldown:</b> 24 seconds`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 30,
      name: 'From Rest',
      image: '',
      description: `Amara gains improved fire rate and charge time.`,
      type: 'skill',
      skillLimit: 3,
      position: [4, 1],

      getEffect: (rank) => `
      <b>Fire Rate:</b> +${rank * 4}%  <br>
      <b>Charge Time:</b> +${rank * 26}% `,


      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 31,
      name: 'Laid Bare',
      image: '',
      description: `Enemies take increased damage from all sources for a few seconds after being damaged by Amara's action skill.
      `,
      type: 'skill',
      skillLimit: 3,
      position: [4, 2],

      getEffect: (rank) => `
      <b>Damage Increase:</b> +${rank * 5}%  <br>
      <b>Duration:</b> 8 seconds`,


      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 32,
      name: 'Wrath',
      image: '',
      description: `Amara gains increased gun damage. This effect is increased after she activates her action skill for a few seconds.
      `,
      type: 'skill',
      skillLimit: 3,
      position: [4, 3],

      getEffect: (rank) => `
      <b>Gun Damage:</b> +${rank * 3}%  <br>
      <b>Gun Damage:</b> +${rank * 5}%  after action skill use <br>
      <b>Duration:</b> 8 seconds`,


      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 33,
      name: 'Remnant',
      image: '',
      description: `When Amara kills an enemy with a gun or action skill, she creates a homing projectile that seeks out a new enemy dealing
      her action skill elemental damage. Any Overkill Damage is added to the projectile's damage.
      `,
      type: 'skill',
      skillLimit: 3,
      position: [5, 1],

      getEffect: (rank) => ``,

      getDescription: function (rank) {
        return this.description;
      }
    },
    {
      // index: 34,
      name: 'Awakening',
      image: '',
      description: `Amara's Rush stacks gain increased effectiveness.`,
      type: 'skill',
      skillLimit: 3,
      position: [5, 3],

      getEffect: (rank) => `<b>Rush Stack Effectiveness:</b> +${rank * 10}%`,

      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 35,
      name: 'Tandava',
      image: '',
      description: `Amara sends forward an Astral Projection of herself. When it hits a target, it explodes, damaging all nearby enemies.`,
      type: 'action-skill',
      skillLimit: 1,
      position: [5, 4],

      getEffect: (rank) => `<b>Cooldown:</b> 28 seconds`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 36,
      name: 'Avatar',
      image: '',
      description: `Amara's action skill can be activated while it's cooling down.
      This skill may only be used once per completed cooldown. Additionally, increases Amara's max Rush stacks.`,
      type: 'skill',
      skillLimit: 1,
      position: [6, 2],

      getEffect: (rank) => `<b>Bonus Rush Stacks:<br> +10`,

      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
  ];
  public brawl: Skill[] = [
    {
      // index: 0,
      name: 'Phaseslam',
      image: '',
      description: 'Amara leaps into the air and Slams the ground, dealing damage to all nearby enemies and knocking them up.',
      type: 'action-skill',
      skillCount: 0,
      skillLimit: 1,
      position: [0, 2],

      getEffect: (rank) => '',
      getDescription: function (rank) {
        return this.description;
      }
    },

    {
      name: 'One With Nature',
      image: '',
      description: 'Amara gains increased max health and elemental damage resistance to her action skill element.',
      type: 'skill',
      skillLimit: 5,
      position: [1, 1],

      getEffect: (rank) => `
        <b> Max Health: </b>+${ rank * 5} %  <br>
        <b> Elemental Damage Reduction: </b> +${rank * 12} %
          `,
      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      name: 'Personal Space',
      image: '',
      description: `Amara's weapon shots deal bonus damage based on the distance to her target.
      The closer the target, the greater the bonus.`,
      type: 'skill',
      skillLimit: 3,
      position: [1, 2],

      getEffect: (rank) => `<b> Bonus Damage: </b> up to ${rank * 11}% of damage dealt `,
      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },

    {
      name: 'Clarity',
      image: '',
      description: `Amara constantly regenerates health. The lower her health, the more powerful the regeneration.
      After using an action skill, this bonus is doubled for a few seconds.`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 3],

      getEffect: (rank) => `
      <b>Health Regeneration:</b> up to ${rank}% missing health/sec  <br>
      <b>Duration:</b> 5 seconds`,
      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      name: 'Arms Deal',
      image: '',
      description: `Amara deals increased splash damage and takes reduced splash damage.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 1],

      getEffect: (rank) => `
      <b>Splash Damage:</b> +${rank * 3}%
      <b>Splash Damage Reduction:</b> +${rank * 3}% `,
      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 4,
      name: 'Root to Rise',
      image: '',
      description: `Amara gains increased max health.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 2],

      getEffect: (rank) => `<b>Max Health:</b> +${rank}% `,
      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 5,
      name: 'Helping Hand(s)',
      image: '',
      description: `For a few seconds after using her action skill, Amara's arms remain active and grant her damage reduction.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 3],

      getEffect: (rank) => `
      <b>Damage Reduction:</b> +${rank * 4}%  <br>
      <b>Duration:</b> 8 seconds`,
      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 6,
      name: 'Blight Tiger',
      image: '',
      description: `Converts Amara's action skill to corrosive damage.`,
      type: 'element',
      skillLimit: 1,
      position: [2, 4],

      getEffect: (rank) => ``,
      getDescription: function (rank) {
        return this.description + '</br>' + this.getEffect(rank);
      }
    },
    {
      // index: 7,
      name: 'Fracture',
      image: '',
      description: `Amara summons a handful of fists that erupt from the ground, dealing damage to enemies in front of Amara.`,
      type: 'action-skill',
      skillLimit: 1,
      position: [3, 0],

      getEffect: (rank) => `<strong>Cooldown:</strong> 26 seconds`,
      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 8,
      name: 'Mindfulness',
      image: '',
      description: `Whenever Amara takes damage, she gains a stack of Mindfulness. Stacks decay after a few seconds.`,
      type: 'skill',
      skillLimit: 3,
      position: [3, 1],

      getEffect: (rank) => `
      <b>Movement Speed:</b> +${rank * 1.4}% per stack and rank <br>
      <b>Shield Regeneration Delay:</b> -${rank * 2.5}% per stack and rank <br>
      <b>Max Mindfulness Stacks:</b> 25 <br>
      <b>Duration:</b> 5 seconds`,
      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 9,
      name: 'Find Your Center	',
      image: '',
      description: `Amara gains increased melee damage.
       Additionally, for a few seconds after using her action skill, Amara gains increased melee range.`,
      type: 'skill',
      skillLimit: 1,
      position: [3, 2],

      getEffect: (rank) => `
      <b>Movement Speed:</b> +${rank * 1.4}% per stack and rank <br>
      <b>Shield Regeneration Delay:</b> -${rank * 2.5}% per stack and rank <br>
      <b>Max Mindfulness Stacks:</b> 25 <br>
      <b>Duration:</b> 5 seconds`,
      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 10,
      name: 'Vigor',
      image: '',
      description: `Killing an enemy with Amara's action skill grants all allies increased movement speed for a few seconds.
      This effect stacks.`,
      type: 'skill',
      skillLimit: 3,
      position: [3, 3],

      getEffect: (rank) => `
      <strong>Team Movement Speed:</strong> +${rank * 2}%  <br>
      <strong>Duration:</strong> 8 seconds`,
      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 11,
      name: 'Revelation',
      image: '',
      description: `Amara's action skill now creates a nova when it damages enemies, dealing damage to all nearby enemies.`,
      type: 'augment',
      skillLimit: 1,
      position: [3, 4],

      getEffect: (rank) => `<b>Action Skill Damage</b>: -15%`,
      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 12,
      name: 'Downfall',
      image: '',
      description: `Amara leaps into the air and shoots an elemental beam below her briefly, followed by a slam.`,
      type: 'action-skill',
      skillLimit: 1,
      position: [4, 0],

      getEffect: (rank) => `<b>Action Skill Damage:</b> -15%`,
      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 13,
      name: 'Samsara',
      image: '',
      description: `Whenever Amara deals damage to an enemy with her action skill, she adds a stack of Samsara.
      For every stack, Amara gains increased gun damage and health regeneration for a few seconds. Stacks decay after a few seconds.`,
      type: 'skill',
      skillLimit: 3,
      position: [4, 2],

      getEffect: (rank) => `
      <b>Gun Damage:</b> +${rank * 2}% per enemy damaged <br>
      <b>Health Regeneration:</b> +1% of max health/sec per stack and rank <br>
      <b>Max Samsara Stacks:</b> 25 <br>
      <b>Duration:</b> 8 seconds`,
      getDescription: function () {
        let desc = this.description;

        if (this.skillCount !== 0) {
          desc += '<br><br> <b>Current Rank:</b><br>' + this.getEffect(this.skillCount);
        }

        if (this.skillCount !== this.skillLimit) {
          desc += '<br><br> <b>Next Rank:</b><br>' + this.getEffect(this.skillCount + 1);
        }

        return desc;
      }
    },
    {
      // index: 14,
      name: 'Do unto Others',
      image: '',
      description: `Whenever an enemy damages Amara, she automatically throws an energy orb back at them,
      dealing action skill elemental damage. This skill has a short cooldown.`,
      type: 'skill',
      skillLimit: 1,
      position: [5, 1],

      getEffect: (rank) => `<b>Cooldown:</b> 8 seconds`,
      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 15,
      name: 'Jab Cross',
      image: '',
      description: `Whenever Amara deals melee damage to an enemy,
      she gains increased action skill damage and weapon damage for a few seconds.`,
      type: 'skill',
      skillLimit: 5,
      position: [5, 2],

      getEffect: (rank) => `
      <b>Weapon Damage:</b> +10%  <br>
      <b>Action Skill Damage:</b> +11%  <br>
      <b>Duration:</b> 20 seconds`,
      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 16,
      name: 'Guardian Angel',
      image: '',
      description: `When Amara enters Fight For Your Life, she immediately gains a Second Wind, restores her health,
      and creates an action skill elemental nova that knocks back nearby enemies. This skill has a long cooldown.`,
      type: 'skill',
      skillCount: 0,

      skillLimit: 1,
      position: [5, 3],

      getEffect: (rank) => `
      <b>Max Health Restored:</b> 100% of max health <br>
      <b>Cooldown:</b> 60 seconds
      `,
      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 17,
      name: 'Glamour',
      image: '',
      description: `Enemies damaged by Amara's action skill become confused and temporarily attack their allies.
      However, action skill cooldown is increased.
      If Amara targets an enemy with Phasegrasp, enemies near the grasped target are confused as well.`,
      type: 'augment',
      skillLimit: 1,
      position: [5, 4],

      getEffect: (rank) => `
      <b>Damage:</b> -60% <br>
      <b>Confuse Duration:</b> 6 seconds <br>
      <b>Cooldown:</b> +20%`,
      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
    {
      // index: 18,
      name: 'Blitz',
      image: '',
      description: `Melee override. Amara dashes a short distance forward and performs a special melee strike,
      dealing elemental melee damage.
       If a Blitz melee attack kills an enemy, its cooldown is immediately reset.`,
      type: 'skill',
      skillLimit: 1,
      skillCount: 0,
      position: [6, 2],

      getEffect: (rank) => `
      <b>Cooldown:</b> 10 seconds`,
      getDescription: function (rank) {
        return this.description + '<br><br>' + this.getEffect(rank);
      }
    },
  ];

  constructor(
  ) { }




  public getSkillSet(): any[] {
    // TODO: Remove prepbuilds -> do it before hand
    this.prepBuilds();
    return [
      this.brawl, this.mysticalAssault, this.fistOfTheElements
    ];
  }

  prepBuilds() {
    // configure index
    let index = 0;

    this.brawl = this.brawl.map(skill => {
      skill['index'] = index++;
      skill['image'] = `assets/amaraIcons/${index}.png`;
      skill['color'] = 'green';
      return skill;
    });

    this.mysticalAssault = this.mysticalAssault.map(skill => {
      skill['index'] = index++;
      skill['image'] = `assets/amaraIcons/${index}.png`;
      skill['color'] = 'blue';
      return skill;
    });

    this.fistOfTheElements = this.fistOfTheElements.map(skill => {
      skill['index'] = index++;
      skill['image'] = `assets/amaraIcons/${index}.png`;
      skill['color'] = 'red';
      return skill;
    });
  }

  getBuildMap(): any[] {
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


      treePoints += tree[x].skillCount;
      buildMap[posY][posX] = tree[x];
    }

    return {
      builds: buildMap,
      treePoints: treePoints
    };
  }

  getBlankSlate(): string {
    const buildLength = this.brawl.length + this.mysticalAssault.length + this.fistOfTheElements.length;
    return '0'.repeat(buildLength);
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


  public getEquippedSkills(token: string): any {
    // check for locations
    const equipArray = [];
    const actionSkillSelectedIndex = [];
    const augmentSkillSelectedIndex = [];
    const elementSkillSelectedIndex = [];
    // get actionSkill
    const actionSkillLocations = this.getSpecials('action-skill');

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

    const augmentSkillLocations = this.getSpecials('augment');
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

    const elementSkillLocations = this.getSpecials('element');

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

  getSpecialLocations(type: string) {
    const specialLocations = this.getSpecials(type).map(skill => {
      return skill.index;
    });

    return specialLocations;
  }

  getSpecials(type: string): any {
    // this.prepBuilds();

    const specialArray = [];
    this.brawl.forEach(skill => {
      if (skill.type === type) {
        specialArray.push(skill);
      }
    });
    this.mysticalAssault.forEach(skill => {
      if (skill.type === type) {
        specialArray.push(skill);
      }
    });
    this.fistOfTheElements.forEach(skill => {
      if (skill.type === type) {
        specialArray.push(skill);
      }
    });

    return specialArray;
  }

  getTrueRoute(builds: any): string {
    const buildArray = [];
    for (let x = 0; x < builds.length; x++) {
      builds[x].forEach(skill => {
        if (skill !== 'x') {
          buildArray.push(skill.skillCount);
        }
      });
    }
    return buildArray.join('');
  }

  getBuildSet(): [] {
    return [];
  }

  getBuildIndexes(builds: any): any {
    // array in arrays
    return [[], [], []];
  }

  getSkillList(): [] {
    return [];
  }

  getTreeInfo(): any {
    return [
      { name: 'Brawl', color: 'green' },
      { name: 'Mystical Assault', color: 'blue' },
      { name: 'Fist of the Elements', color: 'red' },
    ];
  }

  public getTrees(token: string): any {
    this.prepBuilds();
    const skillList = this.getSkillList();
    const buildSet: [] = this.getBuildSet();
    const buildIndices: [] = this.getBuildIndexes(buildSet);
    const buildTokens = buildIndices.map(indices => token.slice(indices));

    const trees = buildTokens.map((tokenBuild, idx) => {
      return this.createBuild(skillList[idx], tokenBuild);
    });

    const trueRoute = this.getTrueRoute(trees);
    const treeInfo = this.getTreeInfo();
    return {
      totalPoints: trees.reduce((acc, tree) => tree.totalPoints + acc),
      equippedSkills: this.getEquippedSkills(trueRoute),
      builds:
        trees.map((tree, idx) => {
          return {
            name: treeInfo[idx].name,
            color: treeInfo[idx].color,
            build: tree.build,
            chunkLocation: buildIndices[idx],
            treePoints: tree.totalPoints,
          };
        })
    };
  }
}

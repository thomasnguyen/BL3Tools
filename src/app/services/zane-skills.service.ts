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
  public underCover: Skill[] = [
    {
      name: 'Barrier',
      image: '',
      description: `Drop a deployable Barrier that blocks incoming projectiles.
       Zane and his allies can shoot through the Barrier, dealing increased Gun Damage.
       Pressing the Action Skill button while Barrier is active picks up and holds the Barrier, but the size and bonuses are decreased.`,
      type: 'action-skill',
      skillLimit: 1,
      position: [0, 2],
      skillCount: 0,

      getEffect: (rank) => `
      9 second Duration, 18 second Cooldown, 20% Damage Amp
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Adrenaline',
      image: '',
      description: `Zane gains increased Action Skill Cooldown Rate. This bonus is based on the amount of shields he has.
      The more percent full, the greater the bonus.`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 1],
      skillCount: 0,

      getEffect: (rank) => `
      Up to ${rank * 4}% Action Skill Cooldown Rate.
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Hearty Stock',
      image: '',
      description: `Zane gains increased Maximum Shield Capacity.`,
      type: 'skill',
      skillLimit: 3,
      position: [1, 2],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 6}% Max Shields
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Ready for Action',
      image: '',
      description: `Zane gains improved Shield Recharge Rate and Shield Recharge Delay.`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 3],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 6}% Shield Recharge Rate, ${rank * -8}% Shield Recharge Delay
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Charged Relay',
      image: '',
      description: `Whenever Zane or an ally touches the Barrier, they gain increased Movement Speed and Fire Rate for a few seconds.`,
      type: 'augment',
      skillLimit: 1,
      position: [2, 0],
      skillCount: 0,

      getEffect: (rank) => `
      13% Fire Rate, 11% Movement Speed, 8 second Duration after moving away from the Barrier
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Brainfreeze',
      image: '',
      description: `Whenever Zane scores a Critical Hit on an enemy, there's a chance they will be Slowed.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 1],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 2.5}% Slow Chance

      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Stiff Upper Lip',
      image: '',
      description: `Whenever Zane is damaged, he gains Damage Resistance against that damage type.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 2],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 5}% Damage Resistance


      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Rise to the Occasion',
      image: '',
      description: `Zane gains Health Regeneration. The lower his shield is, the higher the bonus.
      While Zane's shields are full, he does not receive any health regeneration.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 3],
      skillCount: 0,

      getEffect: (rank) => `
      Up to ${rank * 1}% of Max Health Regeneration per second
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Nanites or Some Shite',
      image: '',
      description: `Zane and his allies gain Health Regeneration, increased Reload Speed,
      and greatly improved Shield Recharge Delay while near his Barrier. The lowe their health, the more health is regenerated.`,
      type: 'augment',
      skillLimit: 1,
      position: [3, 0],
      skillCount: 0,

      getEffect: (rank) => `
      Up to 4% Max Health regeneration per second while near the Barrier. -33% Shield Recharge Delay.11% Reload Speed.
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Confident Competence',
      image: '',
      description: `While Zane's shields are active, he gains increased Gun Damage and Accuracy.
      This bonus is based on the amount of shields he has. The more percent full, the greater the bonus.	`,
      type: 'skill',
      skillLimit: 1,
      position: [3, 2],
      skillCount: 0,

      getEffect: (rank) => `
      Up to 10% Gun Damage, up to 22% Accuracy
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'All-rounder',
      image: '',
      description: `Zane's Barrier becomes a dome, covering all sides.	`,
      type: 'augment',
      skillLimit: 1,
      position: [3, 4],
      skillCount: 0,

      getEffect: (rank) => `
      20% Cooldown
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Redistribution',
      image: '',
      description: `Zane and allies near the Barrier gain increased Gun Damage for a few seconds after the Barrier takes damage.`,
      type: 'augment',
      skillLimit: 1,
      position: [4, 0],
      skillCount: 0,

      getEffect: (rank) => `
      9% Gun Damage, 3 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Really Expensive Jacket',
      image: '',
      description: `Elemental damage over time effects applied to Zane have reduced duration.`,
      type: 'skill',
      skillLimit: 1,
      position: [4, 1],
      skillCount: 0,

      getEffect: (rank) => `
      -50% Elemental Effect Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Best Served Cold',
      image: '',
      description: `Kill Skill. Whenever Zane kills an enemy, they create a Cryo Nova,
       dealing damage to all nearby enemies. This skill has a short cooldown.`,
      type: 'skill',
      skillLimit: 5,
      position: [4, 2],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 3} Damage, 3 second Cooldown
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Futility Belt',
      image: '',
      description: `Zane gains resistance to non-elemental damage. Kill Skill.
      All elemental damage Zane takes is converted to non-elemental damage.	`,
      type: 'skill',
      skillLimit: 1,
      position: [4, 3],
      skillCount: 0,

      getEffect: (rank) => `
      22% Damage Reduction, 8 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Deterrence Field',
      image: '',
      description: `Enemies that touch the Barrier take Shock Damage and are staggered.`,
      type: 'augment',
      skillLimit: 1,
      position: [4, 4],
      skillCount: 0,

      getEffect: (rank) => `
      18 Shock Damage
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Refreshment',
      image: '',
      description: `Whenever Zane damages a frozen enemy with his weapon, he gains some of that damage back as health.`,
      type: 'skill',
      skillLimit: 3,
      position: [5, 1],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 8}% Life Steal on damage dealt
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Calm, Cool, Collected',
      image: '',
      description: `Whenever Zane Freezes an enemy, his shield instantly begins recharging.
      If Zane's shields are already full, he regenerates health for a few seconds.
      If Zane's health is already full, his Action Skill Cooldowns and Durations are immediately reset.`,
      type: 'skill',
      skillLimit: 1,
      position: [5, 2],
      skillCount: 0,

      getEffect: (rank) => `
      Up to 4% max Health Regeneration per second, 3 second Regeneration Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Nerves of Steel',
      image: '',
      description: `Zane gains increasing Accuracy and Handling. The longer his shield is full, the greater the bonus.`,
      type: 'skill',
      skillLimit: 3,
      position: [5, 3],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 2}% Accuracy per second, ${rank * 2.5}% Handling per second, 99 Max Stacks
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Distributed Denial',
      image: '',
      description: `Zane's Barrier gains the effects of his currently equipped Shield Mod.
      Additionally, shield effects are applied to all allies near the Barrier. Bonuses to Zane are reduced.	`,
      type: 'augment',
      skillLimit: 1,
      position: [6, 2],
      skillCount: 0,

      getEffect: (rank) => ``,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
  ];
  public doubledAgent: Skill[] = [
    {
      name: 'Digi-Clone',
      image: '',
      description: `Spawn a Digi-Clone of Zane. This clone stays in place, but distracts and fires at enemies.
      Pressing the Action Skill button while the Clone is active causes Zane and the Clone to swap places.	`,
      type: 'action-skill',
      skillLimit: 1,
      position: [0, 2],
      skillCount: 0,

      getEffect: (rank) => `
        18 second Duration, 26 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Synchronicity',
      image: '',
      description: `Whenever one or more of Zane's Action Skills are active, he gains increased Gun Damage for each active Action Skill.	`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 1],
      skillCount: 0,

      getEffect: (rank) => `
       ${rank * 2}% Gun Damage per active Action Skill
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Praemunitus',
      image: '',
      description: `Zane and his Digi-Clone gain increased Magazine Size.`,
      type: 'skill',
      skillLimit: 3,
      position: [1, 2],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 4}% Magazine Size
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Borrowed Time',
      image: '',
      description: `Zane gains increased Action Skill Duration for every active Action Skill.`,
      type: 'skill',
      skillLimit: 5,
      position: [1, 3],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 4}% Action Skill DUration per active Action Skill
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Binary System',
      image: '',
      description: `Whenever Zane swaps places with his Clone, a Cryo Nova is triggered around Zane and his Clone.`,
      type: 'augment',
      skillLimit: 1,
      position: [2, 0],
      skillCount: 0,

      getEffect: (rank) => `
      66 Nova Damage
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Donnybrook',
      image: '',
      description: `Kill Skill. Whenever Zane kills an enemy,
      he and his Digi-Clonee receive increased Gun Damage and gain Health Regeneration for a few seconds.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 1],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 2}% Gun Damage, ${rank * 0.5}% Health Regeneration per second related to Missing Health, 8 second Duration

      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Fractal Frags',
      image: '',
      description: `The Digi-Clone throws a copy of Zane's current grenade mod when it is first activated.
      If the Digi-Clone is killed, it drops a free grenade.
      Kill Skill. Killing an enemy while the Digi-Clone is active gives the Clone a chance to throw a grenade.`,
      type: 'skill',
      skillLimit: 1,
      position: [2, 2],
      skillCount: 0,

      getEffect: (rank) => `
      30% Grenade Chance
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Duct Tape Mod',
      image: '',
      description: `The first shot fired from Zane's gun has a chance to also fire a grenade.
      The more grenades in his capacity, the higher the chance.`,
      type: 'skill',
      skillLimit: 5,
      position: [2, 3],
      skillCount: 0,

      getEffect: (rank) => `
      Up to ${rank * 5}% Grenade Chance
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    }, {
      name: 'Schadenfreude',
      image: '',
      description: `Whenever the Clone takes damage, Zane's shield is restored by a portion of that damage.`,
      type: 'augment',
      skillLimit: 1,
      position: [3, 0],
      skillCount: 0,

      getEffect: (rank) => `
      11% Shield Restored on Digi-Clone damage
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: 'Quick Breather	',
      image: '',
      description: `Whenever Zane swaps places with his Clone, his shield immediately begins recharging.`,
      type: 'skill',
      skillLimit: 1,
      position: [3, 2],
      skillCount: 0,

      getEffect: (rank) => `
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Which One's Real`,
      image: '',
      description: `Enemies are more likely to target the Clone for a few seconds after it's summoned and after swapping places.`,
      type: 'augment',
      skillLimit: 1,
      position: [3, 4],
      skillCount: 0,

      getEffect: (rank) => `
      6 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Dooelbanger`,
      image: '',
      description: `Hold down the Action Skill button to end the Action Skill early.
       When Zane's Action Skill is ended, the Clone explodes, dealing Fire Damage to all nearby enemies.
       The more Action Skill time remaining, the greater the damage.`,
      type: 'augment',
      skillLimit: 1,
      position: [4, 0],
      skillCount: 0,

      getEffect: (rank) => `
      Up to 1326 Damage
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Pocket Full of Grenades	`,
      image: '',
      description: `Kill Skill. After killing an enemy, Zane gains Grenade Regeneration for a few seconds.	`,
      type: 'skill',
      skillLimit: 3,
      position: [4, 1],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 5}% Grenade Regeneration, 8 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Old-U`,
      image: '',
      description: `Press the Action Skill button during Fight for Your Life if Digi-Clone is active to
      destroy the clone and immediately gain a Second Wind with full health.`,
      type: 'skill',
      skillLimit: 1,
      position: [4, 2],
      skillCount: 0,

      getEffect: (rank) => `
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Supersonic Man`,
      image: '',
      description: `Whenever one or more of Zane's Action Skills are active,
      he gains increased Movement Speed for each active Action Skill.`,
      type: 'skill',
      skillLimit: 3,
      position: [4, 3],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 4}% Movement Speed per active Action Skill
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Digital Distribution`,
      image: '',
      description: `If Zane takes health damage while the Clone is active, a portion of that damage is shared to his Clone instead.`,
      type: 'augment',
      skillLimit: 1,
      position: [4, 4],
      skillCount: 0,

      getEffect: (rank) => `
      75% Shared Health Damage
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Like a Ghost`,
      image: '',
      description: `Zane and his Digi-Clone gain a chance to ignore bullets.
       This chance is increased for a few seconds after activating an action skill. This effect stacks.`,
      type: 'skill',
      skillLimit: 3,
      position: [5, 1],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 4}% Ignore Bullet Chance, ${rank * 1}% Additional Ignore Bullet Chance, 8 second Duration
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Boom. Enhance.`,
      image: '',
      description: `Whenever Zane summons his Digi-Clone, it consumes up to 3 grenades.
      For every grenade consumed, the Digi-Clone gains increased Gun Damage, Max Health, Fire Rate and Reload Speed.`,
      type: 'skill',
      skillLimit: 1,
      position: [5, 2],
      skillCount: 0,

      getEffect: (rank) => `
      11% Gun Damage per grenade, 17% Max Health per grenade, 17% Fire Rate per grenade, 12% Reload Speed per grenade
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Trick of the Light`,
      image: '',
      description: `Zane deals Bonus Shock Damage to enemies that aren't targeting him.`,
      type: 'skill',
      skillLimit: 3,
      position: [5, 3],
      skillCount: 0,

      getEffect: (rank) => `
      ${rank * 6}% of damage dealt as Bonus Damage
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
    {
      name: `Double Barrel`,
      image: '',
      description: `The Clone is equipped with a copy of Zane's Current Weapon when activated.
      Swapping places with the Clone causes Zane and his clone to gain increased Gun Damage.`,
      type: 'skill',
      skillLimit: 1,
      position: [6, 2],
      skillCount: 0,

      getEffect: (rank) => `
      10% Gun Damage, 100% Item Duping
      `,

      getDescription: function () {
        return this.description + '<br><br>' + this.getEffect(this.skillCount);
      }
    },
  ];

  constructor() { }


  public getSkillSet(): any[] {
    this.prepBuilds();
    return [
      this.underCover, this.hitman, this.doubledAgent
    ];
  }

  prepBuilds() {
    // configure index
    let index = 0;

    this.underCover = this.underCover.map(skill => {
      skill['index'] = index++;
      skill['image'] = `assets/amaraIcons/${index}.png`;
      skill['color'] = 'green';
      return skill;
    });

    this.hitman = this.hitman.map(skill => {
      skill['index'] = index++;
      skill['image'] = `assets/amaraIcons/${index}.png`;
      skill['color'] = 'blue';
      return skill;
    });

    this.doubledAgent = this.doubledAgent.map(skill => {
      skill['index'] = index++;
      skill['image'] = `assets/amaraIcons/${index}.png`;
      skill['color'] = 'red';
      return skill;
    });
  }

  getBlankSlate(): string {
    const buildLength: number = this.underCover.length + this.hitman.length + this.doubledAgent.length;
    return '0'.repeat(buildLength);
  }

  getTreeInfo(): any {
    return [
      { name: 'Under Cover', color: 'green' },
      { name: 'Hitman', color: 'blue' },
      { name: 'Double Agent', color: 'red' },
    ];
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
    this.underCover.forEach(skill => {
      if (skill.type === type) {
        specialArray.push(skill);
      }
    });
    this.hitman.forEach(skill => {
      if (skill.type === type) {
        specialArray.push(skill);
      }
    });
    this.doubledAgent.forEach(skill => {
      if (skill.type === type) {
        specialArray.push(skill);
      }
    });

    return specialArray;
  }

}

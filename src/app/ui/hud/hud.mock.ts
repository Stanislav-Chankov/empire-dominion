import { HudQuest, HudState } from './hud.models';

export function createMockHudState(): HudState {
  const extraQuests: HudQuest[] = Array.from({ length: 18 }, (_, i) => {
    const n = i + 1;
    const level = 8 + (i % 6);
    const zones = ['Whisperfen', 'Stonewatch Ridge', 'Greenfire Glade', 'Duskbarrow', 'Sunken Hollow'];
    const zone = zones[i % zones.length];
    return {
      id: `q-extra-${n}`,
      title: `Bounty: Hexmarked ${n}`,
      level,
      zone,
      description: 'A small job posted on the board. Quick coin for quick work.',
      text: `The board is nailed into old oak.\n\nSomeone has marked a target with green wax.\n\nBring proof and collect your reward.`,
      objectives: [
        { text: 'Defeat the marked target', current: 0, required: 1 },
        { text: 'Return to the bounty board' }
      ],
      rewards: [{ name: 'Gold', quantity: 25 + i * 3 }]
    };
  });

  return {
    gold: 2450,
    hero: {
      raceClass: 'Human Warlock',
      HeroName: 'Stanislav',
      stats: {
        level: 12,
        hp: { current: 1320, max: 1650, regen: 6.3 },
        mana: { current: 540, max: 860, regen: 3.1 },
        xp: { current: 1840, max: 2600 },
        attack: { min: 84, max: 92, speed: 1.5 },
        armor: 9.7,
        moveSpeed: 315
      }
    },
    abilities: [
      {
        id: 'q',
        name: 'Hex Bolt',
        key: 'Q',
        level: 3,
        maxLevel: 4,
        cooldownSeconds: 8,
        cooldownRemainingSeconds: 0,
        manaCost: 90
      },
      {
        id: 'w',
        name: 'Ward Field',
        key: 'W',
        level: 2,
        maxLevel: 4,
        cooldownSeconds: 14,
        cooldownRemainingSeconds: 0,
        manaCost: 120
      },
      {
        id: 'e',
        name: 'Arc Step',
        key: 'E',
        level: 1,
        maxLevel: 4,
        cooldownSeconds: 18,
        cooldownRemainingSeconds: 0,
        manaCost: 60
      },
      {
        id: 'r',
        name: 'Overgrowth Protocol',
        key: 'R',
        level: 1,
        maxLevel: 3,
        cooldownSeconds: 90,
        cooldownRemainingSeconds: 27,
        manaCost: 200
      }
    ],
    inventory: {
      main: [
        { id: 'boots', name: 'Swift Boots', cost: 1400, rarity: 'common' },
        { id: 'wand', name: 'Wand of Sparks', cost: 450, charges: 7, rarity: 'common' },
        { id: 'blade', name: 'Green Blade', cost: 2100, rarity: 'rare' },
        null,
        { id: 'orb', name: 'Orb of Sight', cost: 950, rarity: 'common' },
        null
      ],
      backpack: [
        { id: 'smoke', name: 'Smoke', cost: 80, charges: 2, rarity: 'common' },
        null,
        null
      ],
      stash: [
        { id: 'gem', name: 'Emerald Gem', cost: 900, rarity: 'epic' },
        null,
        null,
        null,
        null,
        null
      ]
    },
    quests: [
      {
        id: 'q-verdant-embers',
        title: 'Verdant Embers',
        level: 12,
        zone: 'Greenfire Glade',
        description: 'The glade smolders with unnatural life. Follow the trail of ash to its source.',
        text: `The forest does not burn like wood.\n\nIt breathes.\n\nTrack the embers and find what feeds them. The air itself tastes of hex and sap.`,
        objectives: [
          { text: 'Collect Verdant Ash', current: 6, required: 8 },
          { text: 'Slay Ash-Touched Sprites', current: 3, required: 6 },
          { text: 'Confront the Green Flame at the clearing' }
        ],
        rewards: [{ name: 'Emerald Sigil' }, { name: 'Gold', quantity: 125 }],
        isTracked: true
      },
      {
        id: 'q-warding-runestones',
        title: 'Warding Runestones',
        level: 11,
        zone: 'Stonewatch Ridge',
        description: 'Reinforce the ward lines by restoring ancient runestones.',
        text: `The warding stones along the ridge were carved to hold back older things.\n\nPlace new runes where the lines have snapped, or the night will find its way in.`,
        objectives: [
          { text: 'Restore broken runestones', current: 2, required: 5 },
          { text: 'Recover a Rune Core from a Stonewatch Sentinel', done: false }
        ],
        rewards: [{ name: 'Warden’s Band' }]
      },
      {
        id: 'q-the-last-wisp',
        title: 'The Last Wisp',
        level: 10,
        zone: 'Whisperfen',
        description: 'Find the lost wisp near the fen and guide it back to the lantern-tree.',
        text: `In the fog, light is a promise.\n\nFind the wisp. Do not let it fade.\n\nReturn it to the lantern-tree so the fen remembers the way home.`,
        objectives: [
          { text: 'Locate the lost wisp', done: true },
          { text: 'Escort the wisp to the lantern-tree' }
        ],
        isComplete: false
      },
      ...extraQuests
    ],
    empire: {
      name: 'Emerald Dominion',
      // Expanded so Resources tab becomes long enough to demonstrate scrolling.
      zoneTypeIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      troops: [
        { id: 't-1', name: '1st Spear Cohort', role: 'Spearmen', level: 3, assignment: 'Patrolling Greenfire Glade' },
        { id: 't-2', name: 'Ridgewatch Rangers', role: 'Rangers', level: 2 },
        { id: 't-3', name: 'Hexguard Initiates', role: 'Battlemages', level: 1, assignment: 'Escorting supply caravan' },
        { id: 't-4', name: 'Stonewall Shieldbearers', role: 'Shieldbearers', level: 4 },
        { id: 't-5', name: 'Duskbarrow Scouts', role: 'Scouts', level: 2, assignment: 'Recon: Duskbarrow outskirts' },
        { id: 't-6', name: 'Riverwatch Sentries', role: 'Sentries', level: 3 },
        { id: 't-7', name: 'Sunken Hollow Wardens', role: 'Wardens', level: 4, assignment: 'Holding the ward line' },
        { id: 't-8', name: 'Coastline Corsairs', role: 'Corsairs', level: 2 },
        { id: 't-9', name: 'Frostwild Trackers', role: 'Trackers', level: 3, assignment: 'Tracking raiders in Frostwild' },
        { id: 't-10', name: 'Badlands Skirmishers', role: 'Skirmishers', level: 2 },
        { id: 't-11', name: 'Cave Delvers', role: 'Delvers', level: 1, assignment: 'Clearing Crystal Caves access' },
        { id: 't-12', name: 'Volcanic Vanguards', role: 'Vanguards', level: 5, assignment: 'Securing obsidian ridge' }
      ],
      workers: [
        { id: 'w-1', name: 'Mire Diggers', role: 'Miners', level: 2, assignment: 'Extracting iron (Stonewatch Ridge)' },
        { id: 'w-2', name: 'Lanternwrights', role: 'Carpenters', level: 1 },
        { id: 'w-3', name: 'Greenfire Herbalists', role: 'Herbalists', level: 3, assignment: 'Gathering herbs (Greenfire Glade)' },
        { id: 'w-4', name: 'Riverline Anglers', role: 'Fishers', level: 2 },
        { id: 'w-5', name: 'Heartland Farmhands', role: 'Farmhands', level: 1, assignment: 'Harvesting grain (Heartland Plains)' },
        { id: 'w-6', name: 'Coastal Gatherers', role: 'Gatherers', level: 2, assignment: 'Collecting seaweed (Coastal Isles)' },
        { id: 'w-7', name: 'Saltpan Crew', role: 'Gatherers', level: 2 },
        { id: 'w-8', name: 'Highland Quarry', role: 'Quarrymen', level: 3, assignment: 'Cutting stone (Highland Mountains)' },
        { id: 'w-9', name: 'Tundra Hunters', role: 'Hunters', level: 2, assignment: 'Collecting fur (Tundra Frostwild)' },
        { id: 'w-10', name: 'Cave Pickers', role: 'Delvers', level: 1 },
        { id: 'w-11', name: 'Smelter Line', role: 'Smelters', level: 2, assignment: 'Smelting iron ingots' },
        { id: 'w-12', name: 'Alchemist Bench', role: 'Alchemists', level: 3, assignment: 'Brewing basic potions' },
        { id: 'w-13', name: 'Stone Masonry', role: 'Masons', level: 2 },
        { id: 'w-14', name: 'Weaving Hall', role: 'Weavers', level: 2, assignment: 'Spinning thread' }
      ]
    }
  };
}



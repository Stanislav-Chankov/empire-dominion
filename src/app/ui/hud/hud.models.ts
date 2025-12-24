export type HudHeroStats = {
  level: number;
  hp: { current: number; max: number; regen: number };
  mana: { current: number; max: number; regen: number };
  xp: { current: number; max: number };
  attack: { min: number; max: number; speed: number };
  armor: number;
  moveSpeed: number;
};

export type HudHero = {
  /** e.g. "Human Warlock" */
  raceClass: string;
  /** e.g. "Stanislav" */
  HeroName: string;
  portraitUrl?: string;
  stats: HudHeroStats;
};

export type HudAbility = {
  id: string;
  name: string;
  key: string; // Q/W/E/R/D/F...
  level: number;
  maxLevel: number;
  cooldownSeconds: number;
  cooldownRemainingSeconds: number;
  manaCost: number;
  isPassive?: boolean;
};

export type HudItem = {
  id: string;
  name: string;
  cost: number;
  charges?: number;
  cooldownRemainingSeconds?: number;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
};

export type HudQuestObjective = {
  text: string;
  current?: number;
  required?: number;
  done?: boolean;
};

export type HudQuestReward = {
  name: string;
  quantity?: number;
};

export type HudQuest = {
  id: string;
  title: string;
  level: number;
  zone: string;
  /** Short description shown in quest details. */
  description: string;
  /** Flavor / instructions / story text shown in quest details. */
  text: string;
  objectives: HudQuestObjective[];
  rewards?: HudQuestReward[];
  isComplete?: boolean;
  isTracked?: boolean;
};

export type HudEmpireTroop = {
  id: string;
  name: string;
  role: string; // e.g. "Spearman", "Ranger"
  level: number;
  assignment?: string; // if set => occupied
};

export type HudEmpireWorker = {
  id: string;
  name: string;
  role: string; // e.g. "Miner", "Builder"
  level: number;
  assignment?: string; // if set => occupied
};

export type HudEmpire = {
  name: string;
  /**
   * Zone type ids that the empire currently has access to / can exploit.
   * This drives which resources + professions become available in the empire panel.
   */
  zoneTypeIds: number[];
  troops: HudEmpireTroop[];
  workers: HudEmpireWorker[];
};

export type HudState = {
  gold: number;
  hero: HudHero;
  abilities: HudAbility[];
  inventory: {
    main: (HudItem | null)[]; // e.g. 6 slots
    backpack: (HudItem | null)[]; // extra slots
    stash: (HudItem | null)[]; // more items
  };
  quests: HudQuest[];
  empire: HudEmpire;
};



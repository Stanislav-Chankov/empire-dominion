export type WowEquipmentSlot =
  | 'Head'
  | 'Neck'
  | 'Shoulder'
  | 'Back'
  | 'Chest'
  | 'Shirt'
  | 'Tabard'
  | 'Wrist'
  | 'Hands'
  | 'Waist'
  | 'Legs'
  | 'Feet'
  | 'Ring1'
  | 'Ring2'
  | 'Trinket1'
  | 'Trinket2'
  | 'MainHand'
  | 'OffHand';

export type EquippedItem = {
  id: string;
  name: string;
  slot: WowEquipmentSlot;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
};

export type HeroEquipment = Partial<Record<WowEquipmentSlot, EquippedItem | null>>;



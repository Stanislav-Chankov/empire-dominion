export function zoneTypeColor(zoneTypeId: number): string {
  // Zone type ids are defined in `public/game-data/zone-types.json`
  switch (zoneTypeId) {
    case 1: // heartland_plains
      return '#FBBF24'; // wheat gold
    case 2: // ancient_forest
      return '#22C55E'; // forest green
    case 3: // highland_mountains
      return '#A3A3A3'; // stone gray
    case 4: // crystal_caves
      return '#C084FC'; // arcane purple
    case 5: // swamp_mire
      return '#10B981'; // swamp teal/green
    case 6: // riverlands
      return '#22D3EE'; // river cyan
    case 7: // desert_badlands
      return '#F59E0B'; // sand amber
    case 8: // tundra_frostwild
      return '#60A5FA'; // icy blue
    case 9: // volcanic_wastes
      return '#EF4444'; // lava red
    case 10: // coastal_isles
      return '#2563EB'; // ocean blue
    default:
      return '#00ff00';
  }
}



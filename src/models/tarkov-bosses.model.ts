export interface ITarkovBossModel {
  id: number;
  name: string;
  imagePortraitLink: string;
}

export interface ITarkovBossesModel {
  spawnChance: number;
  boss: ITarkovBossModel;
}

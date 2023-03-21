import { ITarkovBossesModel } from './tarkov-bosses.model';

export interface ITarkovMapsModel {
  maps: ITarkovMapModel[];
}

export interface ITarkovMapModel {
  id: number;
  name: string;
  normalizedName: string;
  raidDuration: number;
  players: string;
  bosses: ITarkovBossesModel[];
}

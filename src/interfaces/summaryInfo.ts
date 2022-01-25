import { GameMatch, Player } from './_index';

export interface SummaryInfo {
  players: Array<Player>;
  gamesResults: Array<GameMatch>;
}

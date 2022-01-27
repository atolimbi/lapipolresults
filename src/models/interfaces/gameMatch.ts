import { Results } from './_index';

export interface GameMatch {
  gameId: string;
  endGameDate: string;
  amountOfTurns: number;
  boardName: string;
  playerResults: Array<Results>;
}

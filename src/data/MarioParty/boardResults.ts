import { FinalPlace } from 'models/enums/finalPlace';
import { MarioPartyBoards } from 'models/enums/marioPartySuperstarsBoards';

export const BOARD_RESULTS = [
  {
    gameId: 'ddd',
    endGameDate: '29/01/2022',
    amountOfTurns: 20,
    boardName: MarioPartyBoards.YOSHI_ISLAND,
    playerResults: [
      {
        playerName: 'Leo',
        character: 'Yoshi',
        finalPlace: FinalPlace.FIRST,
        amountOfStars: 4,
        amountOfCoins: 42,
      },
      {
        playerName: 'Kty',
        character: 'Daisy',
        finalPlace: FinalPlace.SECOND,
        amountOfStars: 3,
        amountOfCoins: 168,
      },
      {
        playerName: 'Mike',
        character: 'Donkey Kong',
        finalPlace: FinalPlace.THIRD,
        amountOfStars: 3,
        amountOfCoins: 71,
      },
      {
        playerName: 'atolimbi',
        character: 'Wario',
        finalPlace: FinalPlace.FOURTH,
        amountOfStars: 2,
        amountOfCoins: 84,
      },
    ],
  },
  {
    gameId: 'ccc',
    endGameDate: '28/01/2022',
    amountOfTurns: 20,
    boardName: MarioPartyBoards.PEACH_CAKE,
    playerResults: [
      {
        playerName: 'atolimbi',
        character: 'Wario',
        finalPlace: 'first',
        amountOfStars: 6,
        amountOfCoins: 45,
      },
      {
        playerName: 'Vi',
        character: 'Rosalina',
        finalPlace: 'second',
        amountOfStars: 4,
        amountOfCoins: 118,
      },
      {
        playerName: 'Kty',
        character: 'Daisy',
        finalPlace: 'third',
        amountOfStars: 4,
        amountOfCoins: 53,
      },
      {
        playerName: 'Leo',
        character: 'Luigi',
        finalPlace: 'fourth',
        amountOfStars: 2,
        amountOfCoins: 68,
      },
    ],
  },
  {
    gameId: 'bbb',
    endGameDate: '15/01/2022',
    amountOfTurns: 15,
    boardName: MarioPartyBoards.SPACE_LAND,
    playerResults: [
      {
        playerName: 'Mike',
        character: 'Luigi',
        finalPlace: 'third',
        amountOfStars: 3,
        amountOfCoins: 57,
      },
      {
        playerName: 'Leo',
        character: 'Yoshi',
        finalPlace: 'fourth',
        amountOfStars: 1,
        amountOfCoins: 34,
      },
      {
        playerName: 'atolimbi',
        character: 'Mario',
        finalPlace: 'second',
        amountOfStars: 3,
        amountOfCoins: 61,
      },
      {
        playerName: 'Vi',
        character: 'Rosalina',
        finalPlace: 'first',
        amountOfStars: 6,
        amountOfCoins: 15,
      },
    ],
  },
  {
    gameId: 'aaa',
    endGameDate: '14/01/2022',
    amountOfTurns: 20,
    boardName: MarioPartyBoards.WOODY_WOODS,
    playerResults: [
      {
        playerName: 'Mike',
        character: 'Luigi',
        finalPlace: 'first',
        amountOfStars: 6,
        amountOfCoins: 108,
      },
      {
        playerName: 'Leo',
        character: 'Wario',
        finalPlace: 'second',
        amountOfStars: 3,
        amountOfCoins: 64,
      },
      {
        playerName: 'atolimbi',
        character: 'Yoshi',
        finalPlace: 'third',
        amountOfStars: 3,
        amountOfCoins: 29,
      },
      {
        playerName: 'Kty',
        character: 'Rosalina',
        finalPlace: 'fourth',
        amountOfStars: 3,
        amountOfCoins: 0,
      },
    ],
  },
];

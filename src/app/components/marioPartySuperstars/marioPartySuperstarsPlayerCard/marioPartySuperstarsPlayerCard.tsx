import { Card, CardContent, CardHeader } from '@mui/material';
import { FinalPlace } from 'models/enums/finalPlace';
import { GameMatch } from 'models/interfaces/gameMatch';
import { Result } from 'models/interfaces/_index';

const getAccumulatedTurns = (playerStats: Array<GameMatch>): number => {
  // console.log(playerStats);
  let totalTurns = 0;
  playerStats.forEach((round: GameMatch) => {
    totalTurns = totalTurns + round.amountOfTurns;
  });
  return totalTurns;
};

const getAccumulatedStars = (playerResults: Array<Result>): number => {
  let totalStars = 0;
  playerResults.forEach((result: Result) => {
    totalStars = totalStars + result.amountOfStars;
  });
  return totalStars;
};

function MarioPartySuperstarsPlayerCard(props: { playerStats: Array<GameMatch>; playerName: string }) {
  const playerName = props.playerName;
  const noData = <p>Sin datos para el jugador</p>;
  const accumulatedTurns = getAccumulatedTurns(props.playerStats);
  const accumulatedRounds = props.playerStats.length;
  const accumulatedStars = getAccumulatedStars(props.playerStats.map((round: GameMatch) => round.playerResults[0]));
  const totalWins = props.playerStats
    .map((round: GameMatch) => round.playerResults[0])
    .filter((result: Result) => result.finalPlace === FinalPlace.FIRST).length;
  const totalLoses = props.playerStats
    .map((round: GameMatch) => round.playerResults[0])
    .filter((result: Result) => result.finalPlace === FinalPlace.FOURTH).length;
  return playerName ? (
    <Card>
      <CardContent>
        <CardHeader title={playerName}></CardHeader>
        <CardContent>
          {props.playerStats.length <= 0 ? (
            noData
          ) : (
            <div>
              <p>Total rondas: {accumulatedRounds}</p>
              <p>Total turnos: {accumulatedTurns}</p>
              <p>Total estrellas: {accumulatedStars}</p>
              <p>Total partidas ganadas: {totalWins}</p>
              <p>Total partidas ultimo lugar: {totalLoses}</p>
            </div>
          )}
        </CardContent>
      </CardContent>
    </Card>
  ) : (
    <span></span>
  );
}

export default MarioPartySuperstarsPlayerCard;

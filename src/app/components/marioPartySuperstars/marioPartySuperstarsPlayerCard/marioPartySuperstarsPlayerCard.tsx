import { Box, Typography } from '@mui/material';
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
  const noData = <Box sx={{ p: 2 }}>Sin datos para el jugador</Box>;
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
    <Box sx={{ border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
      <Typography
        variant="h6"
        sx={{
          p: 2,
          fontFamily: 'monospace',
          color: 'white',
          backgroundColor: 'primary.main',
          borderTopRightRadius: '16px',
          borderTopLeftRadius: '16px',
        }}
      >
        {playerName}
      </Typography>

      {props.playerStats.length <= 0 ? (
        noData
      ) : (
        <Box sx={{ p: 2 }}>
          <div>
            <strong>Total rondas:</strong> {accumulatedRounds}
          </div>
          <div>
            <strong>Total turnos:</strong> {accumulatedTurns}
          </div>
          <div>
            <strong>Total estrellas:</strong> {accumulatedStars}
          </div>
          <div>
            <strong>Total partidas ganadas:</strong> {totalWins}
          </div>
          <div>
            <strong>Total partidas ultimo lugar:</strong> {totalLoses}
          </div>
        </Box>
      )}
    </Box>
  ) : (
    <span></span>
  );
}

export default MarioPartySuperstarsPlayerCard;

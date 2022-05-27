import { Grid } from '@mui/material';
import { Player, SummaryInfo, Result, GameMatch } from 'models/interfaces/_index';
import { useTranslation } from 'react-i18next';
import MarioPartySuperstarsPlayerCard from '../marioPartySuperstarsPlayerCard/marioPartySuperstarsPlayerCard';

function MarioPartySuperstarsSummary(props: SummaryInfo) {
  const { t } = useTranslation();

  /*const getPlayerAllTimeResults = (globalResults: Array<GameMatch>, playerName: string): Array<Result> => {
    const allTimePlayerResults: Array<Result> = [];
    globalResults.forEach((round) => {
      const playerResultsOnRound = round.playerResults.find((result: Result) => result.playerName === playerName);
      if (playerResultsOnRound) {
        allTimePlayerResults.push(playerResultsOnRound);
      }
    });
    return allTimePlayerResults;
  };*/

  const getPlayerAllRoundsStats = (globalResults: Array<GameMatch>, playerName: string): { playerStats: Array<GameMatch>; playerName: string } => {
    const allTimePlayerRounds: Array<GameMatch> = [];
    globalResults.forEach((round) => {
      const playerResultsOnRound = round.playerResults.find((result: Result) => result.playerName === playerName);
      if (playerResultsOnRound) {
        allTimePlayerRounds.push({ ...round, playerResults: [playerResultsOnRound] });
      }
    });
    return { playerStats: allTimePlayerRounds, playerName: playerName };
  };

  return (
    <div>
      <h2>{t('marioPartySuperstars.title')} - Acumulados</h2>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {props.players.map((player: Player, index: number) => (
          <Grid item sx={{ width: '100%' }} xs={12} sm={6} md={4} key={index}>
            <MarioPartySuperstarsPlayerCard {...getPlayerAllRoundsStats(props.gamesResults, player.playerName)}></MarioPartySuperstarsPlayerCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MarioPartySuperstarsSummary;

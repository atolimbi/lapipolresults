import { Grid } from '@mui/material';
import TournamentCard from 'app/components/tournamentCard/TournamentCard';
import { GameMatch } from 'models/interfaces/gameMatch';
import { useTranslation } from 'react-i18next';

// import { makeStyles } from '@mui/styles';

function TournamentCardContainer(props: Record<string, Array<GameMatch>>) {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('marioPartySuperstars.latestGames.title')}</h2>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {props.latestGames.map((game: GameMatch) => (
          <Grid
            item
            sx={{ width: '100%' }}
            xs={12}
            sm={6}
            md={4}
            key={game.gameId}
          >
            <TournamentCard {...game}></TournamentCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TournamentCardContainer;

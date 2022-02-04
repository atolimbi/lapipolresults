import { Grid } from '@mui/material';
import TournamentCard from 'app/components/tournamentCard/TournamentCard';
import { GameMatch } from 'models/interfaces/gameMatch';
import { useTranslation } from 'react-i18next';

function TournamentCardContainer(props: Record<string, Array<GameMatch>>) {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('marioPartySuperstars.latestGames.title')}</h2>
      <Grid container spacing={2}>
        {props.latestGames.map((game: GameMatch) => (
          <Grid item>
            <TournamentCard {...game}></TournamentCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TournamentCardContainer;

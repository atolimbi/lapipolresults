import { Grid } from '@mui/material';
import TournamentCard from 'app/components/tournamentCard/TournamentCard';
import { GameMatch } from 'models/interfaces/gameMatch';

function TournamentCardContainer(props: Record<string, Array<GameMatch>>) {
  return (
    <>
      <h2>Most recents games</h2>
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

import { Container, CssBaseline, Divider } from '@mui/material';
import SummaryGroupContainer from 'components/summaryGroupContainer/SummaryGroupContainer';
import TournamentCardContainer from 'components/tournamentCardContainer/TournamentCardContainer';
import { BOARD_RESULTS } from 'data/boardResults';
import { playersInfo } from 'data/players';
import { SummaryInfo } from 'interfaces/_index';

function App() {
  const summaryInfo: SummaryInfo = {
    players: playersInfo,
    gamesResults: BOARD_RESULTS,
  };
  const latestFiveGames = { latestGames: BOARD_RESULTS.slice(0, 5) };
  return (
    <>
      <CssBaseline>
        <Container maxWidth="lg">
          <Divider />
          <div>
            <SummaryGroupContainer {...summaryInfo}></SummaryGroupContainer>
            <TournamentCardContainer
              {...latestFiveGames}
            ></TournamentCardContainer>
          </div>
        </Container>
      </CssBaseline>
    </>
  );
}

export default App;

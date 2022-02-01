import { Box, Button } from '@mui/material';
import MarioPartySuperstarsSummary from 'app/components/marioPartySuperstarsSummary/marioPartySuperStarsSummary';
import TournamentCardContainer from 'app/components/tournamentCardContainer/TournamentCardContainer';
import { BOARD_RESULTS } from 'data/MarioParty/boardResults';
import { playersInfo } from 'data/players';
import { SummaryInfo } from 'models/interfaces/_index';
import { Link } from 'react-router-dom';

function MarioPartySuperstarsPage() {
  const summaryInfo: SummaryInfo = {
    players: playersInfo,
    gamesResults: BOARD_RESULTS,
  };
  const latestFiveGames = { latestGames: BOARD_RESULTS.slice(0, 5) };
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <MarioPartySuperstarsSummary
          {...summaryInfo}
        ></MarioPartySuperstarsSummary>
        <TournamentCardContainer {...latestFiveGames}></TournamentCardContainer>
      </Box>
      <Button component={Link} to="/" variant="contained">
        Return Home
      </Button>
    </>
  );
}

export default MarioPartySuperstarsPage;

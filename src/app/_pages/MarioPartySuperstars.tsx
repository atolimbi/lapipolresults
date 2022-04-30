import { Box, Button, Fade } from '@mui/material';
import MarioPartySuperstarsSummary from 'app/components/marioPartySuperstars/marioPartySuperstarsSummary/marioPartySuperstarsSummary';
import MarioPartySuperstarsTitle from 'app/components/marioPartySuperstars/marioPartySuperstarsTitle/marioPartySuperstarsTitle';
import TournamentCardContainer from 'app/components/tournamentCardContainer/TournamentCardContainer';
import { BOARD_RESULTS } from 'data/MarioParty/boardResults';
import { playersInfo } from 'data/players';
import { SummaryInfo } from 'models/interfaces/_index';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function MarioPartySuperstarsPage() {
  const { t } = useTranslation();
  const summaryInfo: SummaryInfo = {
    players: playersInfo,
    gamesResults: BOARD_RESULTS,
  };
  const latestFiveGames = { latestGames: BOARD_RESULTS.slice(0, 5) };
  return (
    <Fade in={true}>
      <Box>
        <Box sx={{ mb: 4 }}>
          <MarioPartySuperstarsTitle></MarioPartySuperstarsTitle>
          <MarioPartySuperstarsSummary
            {...summaryInfo}
          ></MarioPartySuperstarsSummary>
          <TournamentCardContainer
            {...latestFiveGames}
          ></TournamentCardContainer>
        </Box>
        <Button component={Link} to="/" variant="contained">
          {t('button.back')}
        </Button>
      </Box>
    </Fade>
  );
}

export default MarioPartySuperstarsPage;

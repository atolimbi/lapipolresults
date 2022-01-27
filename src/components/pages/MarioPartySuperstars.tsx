import SummaryGroupContainer from 'components/summaryGroupContainer/SummaryGroupContainer';
import TournamentCardContainer from 'components/tournamentCardContainer/TournamentCardContainer';
import { BOARD_RESULTS } from 'data/MarioParty/boardResults';
import { playersInfo } from 'data/players';
import { SummaryInfo } from 'models/interfaces/_index';

function MarioPartySuperstarsPage() {
  const summaryInfo: SummaryInfo = {
    players: playersInfo,
    gamesResults: BOARD_RESULTS,
  };
  const latestFiveGames = { latestGames: BOARD_RESULTS.slice(0, 5) };
  return (
    <div>
      <SummaryGroupContainer {...summaryInfo}></SummaryGroupContainer>
      <TournamentCardContainer {...latestFiveGames}></TournamentCardContainer>
    </div>
  );
}

export default MarioPartySuperstarsPage;

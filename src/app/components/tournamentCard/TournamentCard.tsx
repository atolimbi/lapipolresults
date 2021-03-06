import { Casino } from '@mui/icons-material';
import { Avatar, Card, CardContent, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
import { GameMatch, Result } from 'models/interfaces/_index';
import { useTranslation } from 'react-i18next';

function TournamentCard(props: GameMatch) {
  const { t } = useTranslation();
  const winnerPlayer: Result | undefined = props.playerResults.find((element: Result) => element.finalPlace === 'first');
  const loserPlayer: Result | undefined = props.playerResults.find((element: Result) => element.finalPlace === 'fourth');
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="dice">
            <Casino />
          </Avatar>
        }
        title={t(`marioPartySuperstars.${props.boardName}`)}
        subheader={props.endGameDate}
      ></CardHeader>
      <CardContent>
        <div>
          <strong>{t('labels.turnsPlayed')}: </strong>
          <span>{props.amountOfTurns}</span>
        </div>
        <div>
          <strong>{t('labels.winner')}: </strong>
          <span>{winnerPlayer?.playerName}</span>
        </div>
        <div>
          <strong>{t('labels.loser')}: </strong>
          <span>{loserPlayer?.playerName}</span>
        </div>
      </CardContent>
      {/* <CardActions>
        <Button variant="contained">Details</Button>
      </CardActions> */}
    </Card>
  );
}

export default TournamentCard;

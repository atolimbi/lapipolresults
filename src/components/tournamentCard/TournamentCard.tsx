import { Casino } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { GameMatch, Results } from 'models/interfaces/_index';

function TournamentCard(props: GameMatch) {
  const winnerPlayer: Results | undefined = props.playerResults.find(
    (element: Results) => element.finalPlace === 'first'
  );
  const loserPlayer: Results | undefined = props.playerResults.find(
    (element: Results) => element.finalPlace === 'fourth'
  );
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="dice">
            <Casino />
          </Avatar>
        }
        title={props.boardName}
        subheader={props.endGameDate}
      ></CardHeader>
      <CardContent>
        <div>
          <strong>Number of turns: </strong>
          <span>{props.amountOfTurns}</span>
        </div>
        <div>
          <strong>Winner: </strong>
          <span>{winnerPlayer?.playerName}</span>
        </div>
        <div>
          <strong>Last Place: </strong>
          <span>{loserPlayer?.playerName}</span>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained">Details</Button>
      </CardActions>
    </Card>
  );
}

export default TournamentCard;

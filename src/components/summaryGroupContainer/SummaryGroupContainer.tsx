import { MonetizationOn, Person, Star } from '@mui/icons-material';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { blueGrey, yellow } from '@mui/material/colors';
import { Player, SummaryInfo, Results, GameMatch } from 'interfaces/_index';
import styles from './SummaryGroupContainer.module.css';

function SummaryGroupContainer(props: SummaryInfo) {
  const getAccumulated = (
    playerName: string,
    itemSearched: string,
    globalResults: Array<GameMatch>
  ): number => {
    let amount = 0;
    globalResults.forEach((element: GameMatch) => {
      element.playerResults.forEach((item: Results) => {
        let currentAmount = 0;
        if (item.playerName === playerName) {
          switch (itemSearched) {
            case 'amountOfStars':
              currentAmount = item.amountOfStars;
              break;
            case 'amountOfCoins':
              currentAmount = item.amountOfCoins;
              break;
          }
        }
        amount = amount + currentAmount;
      });
    });
    return amount;
  };

  // const getPlayerWithMostWins = (): string => {
  //   const winners = props.gamesResults.map(
  //     (element: any) =>
  //       element.filter((item: any) => item.finalPlace === 'first')[0]
  //   );
  //   return 'Hola';
  // };
  return (
    <div>
      <h2>Summary results for group La Pipol (Mario Party Superstars)</h2>
      <List>
        {props.players.map((player: Player) => (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blueGrey[800] }}>
                <Person></Person>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={player.playerName}
              secondary={
                <>
                  <span className={styles.item}>
                    Total <Star sx={{ color: yellow[700] }}></Star> :
                    <strong>
                      {getAccumulated(
                        player.playerName,
                        'amountOfStars',
                        props.gamesResults
                      )}
                    </strong>
                  </span>
                  <span className={styles.item}>
                    Total{' '}
                    <MonetizationOn
                      sx={{ color: yellow[700] }}
                    ></MonetizationOn>{' '}
                    :
                    <strong>
                      {getAccumulated(
                        player.playerName,
                        'amountOfCoins',
                        props.gamesResults
                      )}
                    </strong>
                  </span>
                </>
              }
            ></ListItemText>
          </ListItem>
        ))}
      </List>
      <div>
        <Divider></Divider>
        <div>
          <p>
            <strong>Player with most wins:</strong>
            <span> Javier</span>
          </p>
          <p>
            <strong>Amount of rounds won :</strong>
            <span>10</span>
          </p>
        </div>

        <div>
          <p>
            <strong>Player with best winning ratio:</strong>
            <span> Javier</span>
          </p>
          <p>
            <strong>Amount of rounds won :</strong>
            <span>10</span>
          </p>
          <p>
            <strong>
              Winning ratio ( based on times player has participated) :
            </strong>
            <span>10</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummaryGroupContainer;

import { MonetizationOn, Person, Star } from '@mui/icons-material';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { blueGrey, yellow } from '@mui/material/colors';
import {
  Player,
  SummaryInfo,
  Results,
  GameMatch,
} from 'models/interfaces/_index';
import { useTranslation } from 'react-i18next';
import styles from './marioPartySuperStarsSummary.module.css';

function MarioPartySuperstarsSummary(props: SummaryInfo) {
  const { t } = useTranslation();
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

  return (
    <div>
      <h2>{t('marioPartySuperstars.title')}</h2>
      <List>
        {props.players.map((player: Player) => (
          <ListItem alignItems="flex-start" key={player.playerId}>
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
    </div>
  );
}

export default MarioPartySuperstarsSummary;

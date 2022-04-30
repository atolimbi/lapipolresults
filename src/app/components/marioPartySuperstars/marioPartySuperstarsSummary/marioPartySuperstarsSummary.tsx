import { MonetizationOn, Person, Star } from '@mui/icons-material';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { blueGrey, yellow, red, green, blue } from '@mui/material/colors';
import {
  Player,
  SummaryInfo,
  Results,
  GameMatch,
} from 'models/interfaces/_index';
import { useTranslation } from 'react-i18next';
import styles from './marioPartySuperstarsSummary.module.css';

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
      <h2>{t('marioPartySuperstars.title')} - Acumulados</h2>
      <List>
        {props.players.map((player: Player) => (
          <ListItem alignItems="flex-start" key={player.playerId}>
            <ListItemText
              primary={
                <Box display="flex" alignItems="center">
                  <strong>{player.playerName}</strong>
                </Box>
              }
              secondary={
                <Box>
                  <span className={styles.item}>
                    <Star sx={{ color: yellow[700] }}></Star>:
                    <strong>
                      {getAccumulated(
                        player.playerName,
                        'amountOfStars',
                        props.gamesResults
                      )}
                    </strong>
                  </span>
                  <span className={styles.item}>
                    <MonetizationOn
                      sx={{ color: yellow[700] }}
                    ></MonetizationOn>
                    :
                    <strong>
                      {getAccumulated(
                        player.playerName,
                        'amountOfCoins',
                        props.gamesResults
                      )}
                    </strong>
                  </span>
                </Box>
              }
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MarioPartySuperstarsSummary;

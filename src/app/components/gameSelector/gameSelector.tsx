import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GamesInfo } from 'data/GamesInfo/gamesInfo';
import { GameInfo } from 'models/interfaces/_index';

function GameSelector() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('home.pickgame')}</h2>
      <Stack spacing={2} direction="row">
        {GamesInfo.map((game: GameInfo) => (
          <Button key={game.id} component={Link} to={game.route} variant="contained">
            {game.name}
          </Button>
        ))}
      </Stack>
    </>
  );
}

export default GameSelector;

import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function GameSelector() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('home.pickgame')}</h2>
      <Stack spacing={2} direction="row">
        <Button component={Link} to="/marioparty" variant="contained">
          Mario Party Superstars
        </Button>
        <Button component={Link} to="/yugioh" variant="contained">
          Yugi-Oh
        </Button>
      </Stack>
    </>
  );
}

export default GameSelector;

import { Box, Button, Fade } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function YugiOHPage() {
  const { t } = useTranslation();
  return (
    <Fade in={true}>
      <Box>
        <h2>{t('yugi.title')}</h2>
        <Box sx={{ mb: 4 }}>
          <p>
            <strong>Javier</strong>: 6 Vs <strong>Camilo</strong>: 0
          </p>
          <p>
            <strong>Leo</strong>: 1 Vs <strong>Atolimbi</strong>: 5
          </p>
        </Box>
        <Button component={Link} to="/" variant="contained">
          {t('button.back')}
        </Button>
      </Box>
    </Fade>
  );
}

export default YugiOHPage;

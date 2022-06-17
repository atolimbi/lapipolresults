import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Fade, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function MarioStrikersPage() {
  const { t } = useTranslation();
  return (
    <Fade in={true}>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: 'baseline' }}>
            <Typography variant="h5" sx={{ color: 'primary.main', mr: 2 }}>
              Ato vs Home
            </Typography>
            <Typography sx={{ color: 'secondary.main', mr: 2 }}>Home Lidera 2-0</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Empates: 0</Typography>
            <Typography>Goles Ato: 2</Typography>
            <Typography>Goles Home: 2</Typography>
            <Typography>Ultimos Partidos</Typography>
            <Typography>Ato: 1 - Home: 2</Typography>
            <Typography>Ato: 1 - Home: 4</Typography>
          </AccordionDetails>
        </Accordion>
        <Box>
          <Button component={Link} to="/" variant="contained">
            {t('button.back')}
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}

export default MarioStrikersPage;

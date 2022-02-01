import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function YugiOHPage() {
  return (
    <>
      <h2>Yugi-Oh results'summary</h2>
      <Box sx={{ mb: 4 }}>
        <p>
          <strong>Javier</strong>: 6 Vs <strong>Camilo</strong>: 0
        </p>
        <p>
          <strong>Leo</strong>: 1 Vs <strong>Atolimbi</strong>: 2
        </p>
      </Box>
      <Button component={Link} to="/" variant="contained">
        Return Home
      </Button>
    </>
  );
}

export default YugiOHPage;

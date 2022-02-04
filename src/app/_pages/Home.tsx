import { Box, Fade } from '@mui/material';
import GameSelector from 'app/components/gameSelector/gameSelector';

function HomePage() {
  return (
    <Fade in={true}>
      <Box>
        <GameSelector></GameSelector>
      </Box>
    </Fade>
  );
}

export default HomePage;

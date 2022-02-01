import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function GameSelector() {
  return (
    <>
      <h2>Pick a game</h2>
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

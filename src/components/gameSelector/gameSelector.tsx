import { Button, Stack } from '@mui/material';

function GameSelector() {
  return (
    <>
      <h2>Pick a game</h2>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Mario Party Superstars</Button>
        <Button variant="contained">Yugi-Oh</Button>
      </Stack>
    </>
  );
}

export default GameSelector;

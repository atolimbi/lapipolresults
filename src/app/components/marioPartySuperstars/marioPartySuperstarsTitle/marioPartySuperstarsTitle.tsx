import { Box, Typography } from '@mui/material';
import { blue, green, red, yellow } from '@mui/material/colors';

function MarioPartySuperstarsTitle() {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: 25,
          color: red[400],
          display: 'inline',
        }}
      >
        M
      </Typography>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: 25,
          color: yellow[500],
          display: 'inline',
        }}
      >
        A
      </Typography>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: 25,
          color: blue[800],
          display: 'inline',
        }}
      >
        R
      </Typography>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: 25,
          color: red[400],
          display: 'inline',
        }}
      >
        I
      </Typography>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: 25,
          color: green[700],
          display: 'inline',
        }}
      >
        O
      </Typography>
      - Party Superstars
    </Box>
  );
}

export default MarioPartySuperstarsTitle;

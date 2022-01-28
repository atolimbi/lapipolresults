import { Container, CssBaseline } from '@mui/material';
import GameSelector from 'components/gameSelector/gameSelector';
import MarioPartySuperstarsPage from 'components/_pages/MarioPartySuperstars';
import YugiOHPage from 'components/_pages/YugiOH';

function App() {
  return (
    <>
      <CssBaseline>
        <Container maxWidth="lg">
          <GameSelector></GameSelector>
          <MarioPartySuperstarsPage></MarioPartySuperstarsPage>
          <YugiOHPage></YugiOHPage>
        </Container>
      </CssBaseline>
    </>
  );
}

export default App;

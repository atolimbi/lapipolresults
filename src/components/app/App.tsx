import { Container, CssBaseline } from '@mui/material';
import HomePage from 'components/pages/Home';
import MarioPartySuperstarsPage from 'components/pages/MarioPartySuperstars';
import YugiOHPage from 'components/pages/YugiOH';

function App() {
  return (
    <>
      <CssBaseline>
        <Container maxWidth="lg">
          <MarioPartySuperstarsPage></MarioPartySuperstarsPage>
          <YugiOHPage></YugiOHPage>
        </Container>
      </CssBaseline>
    </>
  );
}

export default App;

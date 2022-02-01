import { Container, CssBaseline } from '@mui/material';
import HomePage from 'app/_pages/Home';
import MarioPartySuperstarsPage from 'app/_pages/MarioPartySuperstars';
import YugiOHPage from 'app/_pages/YugiOH';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <CssBaseline>
        <Container maxWidth="lg">
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/marioparty"
              element={<MarioPartySuperstarsPage />}
            ></Route>
            <Route path="/yugioh" element={<YugiOHPage />}></Route>
          </Routes>
        </Container>
      </CssBaseline>
    </>
  );
}

export default App;

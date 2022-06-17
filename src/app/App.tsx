import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import HomePage from 'app/_pages/Home';
import MarioPartySuperstarsPage from 'app/_pages/MarioPartySuperstars';
import YugiOHPage from 'app/_pages/YugiOH';
import { customTheme } from 'assets/MuiTheme/customTheme';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MarioStrikersPage from './_pages/MarioStrikers';

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline>
          <Container maxWidth="lg">
            <Header></Header>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/marioparty" element={<MarioPartySuperstarsPage />}></Route>
              <Route path="/yugioh" element={<YugiOHPage />}></Route>
              <Route path="/mariostrikers" element={<MarioStrikersPage />}></Route>
            </Routes>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;

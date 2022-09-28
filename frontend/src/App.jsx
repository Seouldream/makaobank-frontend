import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import styled, { ThemeProvider } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import TransferPage from './pages/TransferPage';
import TransactionsPage from './pages/TransactionsPage';

import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';
import PrimaryButton from './components/ui/PrimaryButton';
import SecondaryButton from './components/ui/SecondaryButton';
import Button from './components/ui/Button';

const Main = styled.main`
  padding: 1em;
`;

export default function App() {
  const [themeName, setThemeName] = useLocalStorage('theme', 'default');

  const theme = themeName === 'dark' ? darkTheme : defaultTheme;

  const toggleTheme = () => {
    setThemeName(themeName === 'default' ? 'dark' : 'default');
  };

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Button type="button" onClick={toggleTheme}>
        Toggle mode
      </Button>
      <PrimaryButton type="button" onClick={toggleTheme}>
        Toggle mode
      </PrimaryButton>
      <SecondaryButton type="button" onClick={toggleTheme}>
        Toggle mode
      </SecondaryButton>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

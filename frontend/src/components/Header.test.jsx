import { render, screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import defaultTheme from '../styles/defaultTheme';

import Header from './Header';

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

test('Header', () => {
  render((
    <ThemeProvider theme={defaultTheme}>
      <Header />
    </ThemeProvider>
  ));

  screen.getByText(/Home/);
});

import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import defaultTheme from '../styles/defaultTheme';

import Header from './Header';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
  useNavigate() {
    return navigate;
  },
}));

const context = describe;

describe('Header', () => {
  function renderHeader() {
    render((
      <ThemeProvider theme={defaultTheme}>
        <Header />
      </ThemeProvider>
    ));
  }

  it('renders "Home" link', () => {
    renderHeader();

    screen.getByText(/Home/);
  });

  context('with logged in', () => {
    beforeEach(() => {
      localStorage.removeItem('accessToken');
    });

    it('renders "로그인" button', () => {
      renderHeader();
      screen.getByText(/Home/);

      screen.getByText(/로그인/);
    });

    context('with logged out', () => {
      beforeEach(() => {
        localStorage.setItem('accessToken', JSON.stringify('ACESS TOKEN'));
      });

      it('renders "로그아웃" button', () => {
        renderHeader();

        context('when the "로그아웃" button is clicked', () => {
          it('redirects the home page', () => {
            renderHeader();

            fireEvent.click(screen.getByText(/로그아웃/));

            expect(navigate).toBeCalledWith('/');
          });
        });
      });
    });
  });
});

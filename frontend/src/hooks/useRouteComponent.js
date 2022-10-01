import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TransferPage from '../pages/TransferPage';
import TransactionsPage from '../pages/TransactionsPage';

export default function useRouteComponent() {
  const { pathname } = window.location;

  const components = {
    '/': HomePage,
    '/account': AccountPage,
    '/login': LoginPage,
    '/transfer': TransferPage,
    '/transactions': TransactionsPage,
  };

  return components[pathname] || HomePage;
}

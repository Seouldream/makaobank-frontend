import { Route, Routes } from 'react-router-dom';
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import TransferPage from './pages/transferPage';
import TransactionsPage from './pages/transactionsPage';

export default function App() {
  const { pathname } = window.location;

  const components = {
    '/': HomePage,
    '/account': AccountPage,
    '/transfer': TransferPage,
    '/transactions': TransactionsPage,
  };

  const Component = components[pathname] || HomePage;

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </div>

  );
}

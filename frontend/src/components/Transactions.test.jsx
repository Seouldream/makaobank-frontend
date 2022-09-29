import { render, screen, waitFor } from '@testing-library/react';
import TransactionsPage from '../pages/TransactionsPage';
import { bankStore } from '../stores/BankStore';

test('Transactions', async () => {
  await bankStore.fetchTransactions();

  render(<TransactionsPage />);

  screen.getByText(/거래 내역이 없습니다/);

  await waitFor(() => {
    screen.getByText(/3,000원/);
  });
});

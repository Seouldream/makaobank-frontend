import { render, screen, waitFor } from '@testing-library/react';
import TransactionsPage from './TransactionsPage';

test('TransactionsPage', async () => {
  render(<TransactionsPage />);

  waitFor(() => {
    screen.getByText(/거래 내역이 없습니다/);
  });
});

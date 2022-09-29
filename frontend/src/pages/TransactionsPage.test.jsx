import { render, screen, waitFor } from '@testing-library/react';
import TransactionsPage from './TransactionsPage';

test('TransactionsPage', async () => {
  render(<TransactionsPage />);

  waitFor(() => {
    screen.getByText(/3000원/);
  });
});

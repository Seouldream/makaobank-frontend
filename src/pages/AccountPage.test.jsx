import { render, screen, waitFor } from '@testing-library/react';
import AccountPage from './AccountPage';

test('AccountPage', async () => {
  render(<AccountPage />);

  waitFor(() => {
    screen.getByText(/이름: Tester/);
    screen.getByText(/계좌번호/);
    screen.getByText(/잔액/);
  });
});

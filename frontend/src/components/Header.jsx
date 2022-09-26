import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">잔액 확인</Link>
          </li>
          <li>
            <Link to="/transfer">송금</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

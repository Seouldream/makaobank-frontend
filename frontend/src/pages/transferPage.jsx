import { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function TransferPage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input-account">
          받을 분 계좌 번호
        </label>
        <input
          id="input-account"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="input-amount">
          보낼 금액
        </label>
        <input
          id="input-amount"
          type="text"
        />
      </div>
      <PrimaryButton type="submit">
        보내기
      </PrimaryButton>
      {success ? (
        <p>계좌 이체 성공</p>
      ) : null}
    </form>
  // I.fillField('받을 분 계좌 번호', '1234567890');
  // I.fillField('보낼 금액', '3000');
  // I.click('보내기');

  );
}

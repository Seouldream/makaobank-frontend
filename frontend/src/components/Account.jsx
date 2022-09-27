import BankStore from '../stores/BankStore';

export default function Account() {
  return (
    <div>
      <p>
        이름:
        {' '}
        {BankStore.name}
      </p>
    </div>
  );
}

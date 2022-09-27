import server from '../testServer';
import BankStore from './BankStore';

// jest.mock('../services/ApiService', () => ({
//   apiService: {
//     async postSession(accountNumber, password) {
//       if (accountNumber === '1234' && password === 'password') {
//         return {
//           name: 'Tester',
//           amount: 100_000,
//         };
//       }
//       throw new Error('Login Failed');
//     },
//   },
// }));

// jest.mock('../services/ApiService');

const context = describe;

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('BankStore', () => {
  let bankStore;

  beforeEach(() => {
    bankStore = new BankStore();
  });

  describe('login', () => {
    context('with correct account number and password', () => {
      it('loads account information', async () => {
        await bankStore.login({ accountNumber: '1234', password: 'password' });

        expect(bankStore.name).toBe('Tester');
        expect(bankStore.amount).toBe(100_000);
      });
    });

    context('with incorrect account number', () => {
      it('loads account information', async () => {
        await bankStore.login({ accountNumber: 'xxx', password: 'password' });

        expect(bankStore.name).toBeFalsy();
        expect(bankStore.amount).toBe(0);
      });
    });
  });
});

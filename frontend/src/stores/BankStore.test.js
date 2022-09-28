import { waitFor } from '@testing-library/react';
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

  describe('fetchAccount', () => {
    it('sets account information', async () => {
      await bankStore.fetchAccount();

      expect(bankStore.name).toBe('Tester');
      expect(bankStore.accountNumber).toBe('1234');
      expect(bankStore.amount).toBe(100_000);
    });
  });

  describe('requestTransfer', () => {
    context('when request is successful', () => {
      async function request() {
        await bankStore.requestTransfer({
          to: '1234',
          amount: 100,
          name: 'Test',
        });
      }

      it('sets transfer state to "processing" and "success"', async () => {
        request();
        expect(bankStore.isTransferProcessing).toBeTruthy();

        await waitFor(() => {
          expect(bankStore.isTransferSuccess).toBeTruthy();
        });

        expect(bankStore.errorMessage).toBeFalsy();
      });

      it('doesn\'t set error message', async () => {
        request();

        expect(bankStore.isTransferProcessing).toBeTruthy();

        await waitFor(() => {
          expect(bankStore.isTransferSuccess).toBeTruthy();
        });

        expect(bankStore.errorMessage).toBeFalsy();
      });
    });

    context('when request is failed', () => {
      async function request() {
        await bankStore.requestTransfer({
          to: '1234',
          amount: -100,
          name: 'Test',
        });
      }

      it('sets transfer state to "processing" and "fail"', async () => {
        request();

        expect(bankStore.isTransferProcessing).toBeTruthy();

        await waitFor(() => {
          expect(bankStore.isTransferFail).toBeTruthy();
        });
      });

      it('sets error message', async () => {
        await request();

        expect(bankStore.errorMessage).toBeTruthy();
      });
    });
  });
});

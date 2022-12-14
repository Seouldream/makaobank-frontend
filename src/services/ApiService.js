/* eslint-disable class-methods-use-this */
import axios from 'axios';

const baseUrl = 'https://makaobank-final-hoonstudio.herokuapp.com';

export default class ApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(acceessToken) {
    this.accessToken = acceessToken;
  }

  async postSession({ accountNumber, password }) {
    const url = `${baseUrl}/session`;
    const { data } = await axios.post(url, { accountNumber, password });

    return {
      accessToken: data.accessToken,
      name: data.name,
      amount: data.amount,
    };
  }

  async createAccount({
    name, accountNumber, password, confirmPassword,
  }) {
    const url = `${baseUrl}/register`;
    const { data } = await axios.post(url, {
      name, accountNumber, password, confirmPassword,
    });
    return {
      name: data.name,
      accountNumber: data.accountNumber,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
  }

  async fetchAccount() {
    const url = `${baseUrl}/accounts/me`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    const { name, accountNumber, amount } = data;
    return { name, accountNumber, amount };
  }

  async fetchTransactions() {
    const url = `${baseUrl}/transactions`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    const { transactions } = data;
    return transactions;
  }

  async createTransaction({ to, amount, name }) {
    const url = `${baseUrl}/transactions`;
    await axios.post(url, { to, amount, name }, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  }
}

export const apiService = new ApiService();

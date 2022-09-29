/* eslint-disable class-methods-use-this */
import axios from 'axios';

const baseUrl = 'http://localhost:8000';

export default class ApiService {
  async postSession({ accountNumber, password }) {
    const url = `${baseUrl}/session`;
    const { data } = await axios.post(url, { accountNumber, password });

    return {
      accessToken: data.accessToken,
      name: data.name,
      amount: data.amount,
    };
  }

  async fetchAccount() {
    const url = `${baseUrl}/accounts/me`;
    const { data } = await axios.get(url);
    const { name, accountNumber, amount } = data;
    return { name, accountNumber, amount };
  }

  async fetchTransactions() {
    const url = `${baseUrl}/transactions`;
    const { data } = await axios.get(url);
    const { transactions } = data;
    return transactions;
  }

  async createTransaction({ to, amount, name }) {
    const url = `${baseUrl}/transactions`;
    await axios.post(url, { to, amount, name });
  }
}

export const apiService = new ApiService();

import { ethers } from "ethers";
import { getEthereumContract } from "~/utils/utility";
import { ethereum } from "~/utils/utility";

export const state = () => ({
  currentAccount: [],
  transactions: [],
  gifUrl: [],
  transactionCount: localStorage.getItem("transactionCount"),
});

export const getters = {
  getCurrentAccount(state) {
    return state.currentAccount;
  },

  getTransactions(state) {
    return state.transactions;
  },

  getTransactionCount(state) {
    return state.transactionCount;
  },

  getGifUrl(state) {
    return state.gifUrl;
  },
};

export const mutations = {
  setCurrentAccount(state, value) {
    return (state.currentAccount = value);
  },

  setTransactions(state, value) {
    return (state.transactions = value);
  },

  setTransactionCount(state, value) {
    return (state.transactionCount = value);
  },

  setGifUrl(state, value) {
    return (state.gifUrl = value);
  },
};

export const actions = {
  async getTransactions({ commit }) {
    try {
      if (!ethereum) return alert("Please install metamask!");

      const transactionContract = getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / 10 ** 18, // All values returned in hexadecimal GWEI which is the sub unit of ethereum. So we have to multiply large to get ethereum value
        })
      );

      this.commit("setTransactions", structuredTransactions.reverse());
    } catch (error) {}
  },

  async checkIfWalletIsConnected({ commit }) {
    try {
      if (!ethereum) return alert("Please install metamask!");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        this.commit("setCurrentAccount", accounts[0]);
        this.dispatch("getTransactions");
      }
    } catch (error) {
      throw new Error("No ethereum object check wallet!");
    }
  },

  async checkIfTransactionsExist({ commit }) {
    try {
      const transactionContract = getEthereumContract();
      const transactionCount = await transactionContract.getTransactionCount();
      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      throw new Error("No ethereum object!");
    }
  },

  async connectWallet({ commit }) {
    try {
      if (!ethereum) return alert("Please install metamask!");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      this.commit("setCurrentAccount", accounts[0]);
    } catch (error) {
      throw new Error("No ethereum object connected!");
    }
  },

  async sendTransaction({ state }, formData) {
    try {
      if (!ethereum) return alert("Please install metamask!");
      // Get the data from the from
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: state.currentAccount,
            to: addressTo,
            gas: "0x5208", // in hexadecimal but converted to 2100 GWEI
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockChain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      await transactionHash;

      const transactionCount = await transactionContract.getTransactionCount();
      this.commit("setTransactionCount", transactionCount.toNumber());
      this.commit("settings/setIsLoading");
      this.dispatch("getTransactions");
    } catch (error) {}
  },

  async fetchGifUrl({ commit }, keyword) {
    const API_KEY = this.$config.apiKey;
    try {
      const responseData = await this.$axios.$get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")}$limit=1`
      );
      const { data } = await responseData;
      this.commit("setGifUrl", data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      // Setting a random gif
      this.commit(
        "setGifUrl",
        "https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif"
      );
    }
  },
};

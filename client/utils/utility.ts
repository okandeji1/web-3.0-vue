import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const shortenAddress = (address: any) => `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`

// @ts-ignore
export const { ethereum } = window;

export const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
  return transactionContract;
};

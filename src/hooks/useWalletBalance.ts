import { useEffect, useState } from "react";
import { Networks } from "../utils";
import Web3 from "web3";
import { ABIs, MapNetworkTokenContracts } from "../utils/contract";

interface TokenBalance {
  tokenAddress: string;
  balance: any;
  name: any;
  symbol: any;
}

export const useWalletBalance = (account: string, chainId: Networks) => {
  const [tokenBalances, setTokenBalances] = useState<TokenBalance[]>([]);

  useEffect(() => {
    async function fetchData() {
      const tokenAddresses = MapNetworkTokenContracts[chainId];

      const balances = await Promise.all(
        tokenAddresses.map(async (tokenAddress) => ({
          tokenAddress,
          ...(await getTokenDetails(tokenAddress, account)),
        }))
      );
      setTokenBalances(balances);
    }

    fetchData();
  }, [chainId]);

  return { tokenBalances };
};

const getTokenDetails = async (tokenAddress: string, walletAddress: string) => {
  if (!(window as any).ethereum) return { balance: null, name: "-", symbol: "-" };
  const web3 = new Web3((window as any).ethereum);
  const contract: any = new web3.eth.Contract(ABIs, tokenAddress);
  try {
    const balance = await contract.methods.balanceOf(walletAddress).call();
    const decimals = await contract.methods.decimals().call();
    const name = await contract.methods.name(walletAddress).call();
    const symbol = await contract.methods.symbol(walletAddress).call();
    const decimalsNumber = Number(decimals);
    return { balance: Number(balance) ? Number(balance) / 10 ** decimalsNumber : 0, name, symbol };
  } catch (error) {
    console.error(`Error fetching balance for token ${tokenAddress}:`, error);
    return { balance: null, name: "-", symbol: "-" };
  }
};

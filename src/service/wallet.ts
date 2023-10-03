import { EVMChainParameter } from "../utils";

const getProvider = () => {
  const ethereum = (window as any).ethereum;
  if (!ethereum) return null;
  return ethereum;
};

export const addEthereumChain = async (parameters: EVMChainParameter) => {
  const ethereum = getProvider();
  try {
    await ethereum.request({
      method: "wallet_addEthereumChain",
      params: [parameters],
    });
  } catch (err: unknown) {
    throw err;
  }
};

export const switchEthereumChain = async (chainId: string) => {
  const ethereum = getProvider();
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
  } catch (err: unknown) {
    throw err;
  }
};

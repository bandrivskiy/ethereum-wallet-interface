export enum Networks {
  Ethereum = "0x1",
  Polygon = "0x89",
  Arbitrum = "0xa4b1",
}
const { Ethereum, Polygon, Arbitrum } = Networks;

export type EVMChainParameter = {
  chainId: Networks;
  blockExplorerUrls?: string[];
  chainName?: string;
  iconUrls?: string[];
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls?: string[];
};

export const evmNetworks = [
  {
    chainId: Ethereum,
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://eth.llamarpc.com"],
    blockExplorerUrls: ["https://etherscan.io/"],
  },
  {
    chainId: Polygon,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  {
    chainId: Arbitrum,
    chainName: "Arbitrum One",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://arbitrum.llamarpc.com"],
    blockExplorerUrls: ["https://arbiscan.io/"],
  },
];

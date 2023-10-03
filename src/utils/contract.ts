import { Networks } from "./networks";

const { Ethereum, Polygon, Arbitrum } = Networks;

export const MapNetworkTokenContracts: Record<Networks, string[]> = {
  [Ethereum]: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0xd533a949740bb3306d119cc777fa900ba034cd52"],
  [Polygon]: ["0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", "0x172370d5cd63279efa6d502dab29171933a610af"],
  [Arbitrum]: ["0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9", "0xaf88d065e77c8cc2239327c5edb3a432268e5831", "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978"],
};

export const ABIs = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    type: "function",
  },
];

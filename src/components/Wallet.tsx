import { useMetaMask } from "../context/MetamaskProvider";
import { useWalletBalance } from "../hooks/useWalletBalance";
import { Networks, evmNetworks } from "../utils";

const TokenBalance = ({ chainId, account }: { chainId: Networks; account: string }) => {
  const { tokenBalances } = useWalletBalance(account, chainId);
  return (
    <>
      {tokenBalances.map(({ name, symbol, balance }) => (
        <div>
          <div>
            {name} ({symbol})
          </div>
          <div>{balance}</div>
        </div>
      ))}
    </>
  );
};

export const Wallet = () => {
  const { wallet, hasProvider, switchChain, isConnecting, connectMetaMask } = useMetaMask();

  const isConnected = hasProvider && wallet.accounts.length > 0 && wallet.chainId;
  return (
    <div className="container">
      <div className="connect-section">
        {hasProvider && wallet.accounts.length < 1 && (
          <button disabled={isConnecting} onClick={connectMetaMask}>
            Connect MetaMask
          </button>
        )}
        {hasProvider && wallet.accounts.length > 0 && (
          <a href={`https://etherscan.io/address/${wallet}`} target="_blank">
            {wallet.accounts[0]}
            chain id {wallet.chainId}
          </a>
        )}
      </div>

      {evmNetworks.map((network) => (
        <button onClick={() => switchChain(network.chainId)}>{network.chainName}</button>
      ))}
      {isConnected && <TokenBalance chainId={wallet.chainId as Networks} account={wallet.accounts[0]} />}
    </div>
  );
};

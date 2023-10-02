import { useMetaMask } from "../context/MetamaskProvider";

export const Wallet = () => {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();
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
          </a>
        )}
      </div>
    </div>
  );
};

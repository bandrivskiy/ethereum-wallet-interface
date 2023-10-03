import { WalletState } from "../context/MetamaskProvider";

export const ConnectWallet = ({ onConnect, wallet, isConnected }: { isConnected: boolean | null; onConnect: () => void; wallet: WalletState }) => {
  return (
    <div className="connect-section">
      {!isConnected && (
        <button className="current" onClick={onConnect}>
          Connect MetaMask
        </button>
      )}
      {isConnected && (
        <a href={`https://etherscan.io/address/${wallet.accounts[0]}`} target="_blank">
          {wallet.accounts[0]}
        </a>
      )}
    </div>
  );
};

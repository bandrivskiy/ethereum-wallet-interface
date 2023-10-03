import { useMetaMask, WalletState } from "../context/MetamaskProvider";
import { Networks } from "../utils";
import { ConnectWallet } from "./ConnectWallet";
import { NetworkSwitch } from "./NetworkSwitch";
import { TokenBalance } from "./TokenBalance";

export const Wallet = () => {
  const { wallet, error, errorMessage, hasProvider, switchChain, connectMetaMask } = useMetaMask();
  const isConnected = hasProvider && wallet.accounts.length > 0;

  return (
    <div className="container">
      <ConnectWallet onConnect={connectMetaMask} wallet={wallet} isConnected={isConnected}></ConnectWallet>
      {isConnected && <NetworkSwitch chainId={wallet.chainId as Networks} onSwitch={switchChain} />}
      {isConnected && <TokenBalance chainId={wallet.chainId as Networks} account={wallet.accounts[0]} />}
      {error && <div className="error">{errorMessage}</div>}
    </div>
  );
};

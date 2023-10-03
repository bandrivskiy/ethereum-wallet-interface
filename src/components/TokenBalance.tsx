import { useWalletBalance } from "../hooks/useWalletBalance";
import { Networks } from "../utils";

export const TokenBalance = ({ chainId, account }: { chainId: Networks; account: string }) => {
  const { tokenBalances } = useWalletBalance(account, chainId);
  return (
    <div className="tokens-section">
      {tokenBalances.map(({ name, symbol, balance }) => (
        <div className="token p-1">
          <div>
            {symbol} <span>{name}</span>
          </div>
          <div className="pl-1">{balance}</div>
        </div>
      ))}
    </div>
  );
};

import { evmNetworks, Networks } from "../utils";

export const NetworkSwitch = ({ onSwitch, chainId }: { onSwitch: (chain: Networks) => void; chainId: Networks }) => {
  return (
    <div className="network-section">
      {evmNetworks.map((network) => (
        <button className={`network ${chainId === network.chainId ? "current" : ""}`} onClick={() => onSwitch(network.chainId)}>
          {network.chainName}
        </button>
      ))}
    </div>
  );
};

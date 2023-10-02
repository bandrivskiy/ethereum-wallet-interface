import "./App.css";
import { useState, useEffect } from "react";
import { MetaMaskContextProvider } from "./context/MetamaskProvider";
import { Wallet } from "./components/Wallet";

function App() {
  return (
    <MetaMaskContextProvider>
      <div className="App">
        <Wallet />
      </div>
    </MetaMaskContextProvider>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Onboard from "bnc-onboard";
import Web3 from "web3";

let web3;

const onboard = Onboard({
  dappId: "abfa7356-64c3-4047-a6e1-cdb39a0c691e", // [String] The API key created by step one above
  networkId: 4, // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: (wallet) => {
      web3 = new Web3(wallet.provider);
      console.log(`${wallet.name} is now connected`);
    },
  },
  darkMode: true,
});

function App() {
  const [signedMessage, setSignedMessage] = useState(null);

  const login = async () => {
    try {
      await onboard.walletSelect();
      await onboard.walletCheck();
      setSignedMessage(await signMessage());
    } catch (error) {
      console.log(error);
    }
  };

  const signMessage = async () => {
    const from = (await web3.eth.getAccounts())[0];
    const expiration = Math.round(Date.now() / 1000 + 300).toString();
    const message = `${from}-${expiration}`;
    const signature = await web3.eth.personal.sign(message, from);
    return `${signature}-${message}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <code className="App-signature">{signedMessage}</code>
        <span className="App-button" onClick={login}>
          Connect Wallet
        </span>
      </header>
    </div>
  );
}

export default App;

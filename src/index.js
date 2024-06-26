import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, walletConnect } from '@thirdweb-dev/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
const activeChain = "ethereum";
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[
      metamaskWallet(),
      coinbaseWallet(),
      walletConnect()
      ]}>
      
    <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

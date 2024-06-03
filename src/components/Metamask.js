import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
const Metamask = () => {
  return (
    <div >
      <h1 style={{marginLeft:'50px'}}>Metamask</h1>
      <ConnectWallet style={{marginLeft:'50px'}}/>
    </div>
  );
};

export default Metamask;

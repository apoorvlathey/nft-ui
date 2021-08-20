import { useState } from 'react';
import { LogoIcon, MobileHeader } from '../components';

const networks = [
  { logo: 'ethereum', label: 'Ethereum', value: 'eth' },
  { logo: 'polygon', label: 'Polygon', value: 'polygon' },
  { logo: 'nba', label: 'NBA topshot', value: 'nba' },
];

const Creation = () => {
  const [network, setNetwork] = useState('eth');

  const _handleNetwork = (network) => () => setNetwork(network);

  return (
    <>
      <MobileHeader actions={<></>} />
      <div className='wallet-creation-page'>
        <div className='col'>
          <h1>Connect your first wallet</h1>
          <img src='/images/fisherman.png' alt='Fisherman' />
        </div>
        <div className='col selector'>
          <h2>Choose network</h2>
          <div className='row'>
            {networks.map((_network) => (
              <Option
                onSelect={_handleNetwork(_network.value)}
                {..._network}
                key={_network.value}
                active={_network.value === network}
              />
            ))}
          </div>
          <h2>Choose wallet</h2>
          <div className='row'>
            <Option logo='metamask' label='Metamask' />
            <Option logo='walletconnect' label='Wallet connect' />
            <Option logo='coinbase' label='Coinbase' />
          </div>
        </div>
      </div>
    </>
  );
};

const Option = ({ logo, label, active, onSelect }) => {
  return (
    <div onClick={onSelect} className='option-wrapper'>
      <LogoIcon selected={active} logo={logo} />
      <span className='label'>{label}</span>
    </div>
  );
};

export default Creation;

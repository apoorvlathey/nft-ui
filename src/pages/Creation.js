import { useState } from 'react';
import { Input, LogoIcon, MobileHeader } from '../components';

const networks = [
  { logo: 'ethereum', label: 'Ethereum', value: 'eth' },
  { logo: 'polygon', label: 'Polygon', value: 'polygon' },
  { logo: 'nba', label: 'NBA topshot', value: 'nba' },
];

const Creation = () => {
  const [network, setNetwork] = useState('eth');
  const [username, setUsername] = useState('');

  const _handleNetwork = (network) => () => setNetwork(network);

  return (
    <>
      <MobileHeader
        actions={
          <>
            <a className='skip'>Skip Now</a>
          </>
        }
      />
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
          {network !== 'nba' ? (
            <>
              <h2>Choose wallet</h2>
              <div className='row'>
                <Option logo='metamask' label='Metamask' />
                <Option logo='walletconnect' label='Wallet connect' />
                <Option logo='coinbase' label='Coinbase' />
              </div>
            </>
          ) : (
            <>
              <h2>Choose account</h2>
              <div className='entry'>
                <Input value={username} onChange={setUsername} />
                <button type='submit' className='primary bg-gradient'>
                  Apply
                </button>
              </div>
            </>
          )}
          <div className='bottom'>
            <a href='' className='skip'>
              Skip Now
            </a>
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

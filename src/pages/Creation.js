import { useWeb3React } from '@web3-react/core';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { LogoIcon, MobileHeader, Spinner } from '../components';
import { injected, walletconnect } from '../connectors';
import { useEagerConnect, useInactiveListener } from '../lib/hooks';
// import { getErrorMessage } from '../lib/errors';
import { UserContext } from '../lib/UserContext';

const networks = [
  { logo: 'ethereum', label: 'Ethereum', value: 'eth' },
  { logo: 'polygon', label: 'Polygon', value: 'polygon' },
  { logo: 'nba', label: 'NBA topshot', value: 'nba' },
];

const Wallets = {
  Metamask: { logo: 'metamask', name: 'Metamask' },
  WalletConnect: { logo: 'walletconnect', name: 'WalletConnect' },
};

const connectorsByName = {
  [Wallets.Metamask.name]: injected,
  [Wallets.WalletConnect.name]: walletconnect,
}

const Creation = () => {
  const history = useHistory();
  const [user] = useContext(UserContext);
  useEffect(() => {
    user && !user.loading && !user.issuer && history.push('/login');
  }, [user, history]);

  const context = useWeb3React();
  const { connector, activate, error } = context;

  const [activatingConnector, setActivatingConnector] = useState();

  const [network, setNetwork] = useState('eth');
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('too much rendering');
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();
  // If not loading and no user found, redirect to /login
  useInactiveListener(!triedEager || !!activatingConnector);

  const _handleNetwork = (network) => () => setNetwork(network);

  // console.log(connectorsByName);

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
          {/* {network !== '' ? ( */}
            <>
              <h2>Choose wallet</h2>
              <div className='row'>
              {Object.keys(connectorsByName).map(network => {
              const currentConnector = connectorsByName[network];
              const activating = currentConnector === activatingConnector;
              const connected = currentConnector === connector;
              const disabled = !triedEager || !!activatingConnector || connected || !!error;            
              
              return (
                <Option
                  logo={Wallets[`${network}`].logo}
                  onSelect={() => {
                    setActivatingConnector(currentConnector)
                    activate(connectorsByName[network])
                  }}
                  label={Wallets[`${network}`].name}
                  key={network}
                  active={!disabled}
                  activating={activating}
                  connected
                />
              );
              })}
                {/* <Option logo='metamask' label='Metamask' />
                <Option logo='walletconnect' label='Wallet connect' />
                <Option logo='coinbase' label='Coinbase' /> */}
              </div>
            </>
          {/* // ) : (
          //   <>
          //     <h2>Choose account</h2>
          //     <div className='entry'>
          //       <Input value={username} onChange={setUsername} />
          //       <button type='submit' className='primary bg-gradient'>
          //         Apply
          //       </button>
          //     </div>
          //   </>
          // )} */}
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

const Option = ({ logo, label, active, onSelect, connected, activating }) => {
  return (
    <div onClick={onSelect} className='option-wrapper'>
      {activating && <Spinner color={'black'}/>}
      <LogoIcon selected={active} logo={logo} />
      <span className='label'>{label}</span>
    </div>
  );
};

export default Creation;

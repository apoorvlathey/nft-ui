import ethereum from './logos/eth.svg';
import polygon from './logos/polygon.svg';
import nba from './logos/nba.svg';
import ethereumSelected from './logos/eth-selected.svg';
import polygonSelected from './logos/polygon-selected.svg';
import nbaSelected from './logos/nba-selected.svg';
import metamask from './logos/metamask.svg';
import walletconnect from './logos/walletconnect.svg';
import coinbase from './logos/coinbase.svg';

const logos = {
  ethereum: { selected: ethereumSelected, regular: ethereum },
  polygon: { selected: polygonSelected, regular: polygon },
  nba: { selected: nbaSelected, regular: nba },

  metamask: { selected: metamask, regular: metamask },
  walletconnect: { selected: walletconnect, regular: walletconnect },
  coinbase: { selected: coinbase, regular: coinbase },
};

const Logo = ({ logo, selected }) => {
  const Component = logos[logo]?.[selected ? 'selected' : 'regular'];

  if (typeof Component === 'string') return <img src={Component} />;
  return <Component />;
};

export default Logo;

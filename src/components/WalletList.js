import { useState } from 'react';
import Wallet from './Banner';

import { SortableContainer } from 'react-sortable-hoc';

const WalletList = (props) => {
  return (
    <main>
      {props.items.map((banner, i) => (
        <Wallet value={banner} index={i} key={`key-${i}`} />
      ))}
    </main>
  );
};

export default SortableContainer(WalletList);

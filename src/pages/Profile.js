import { useState, useRef } from 'react';
import { arrayMoveImmutable } from 'array-move';
import {
  Banner,
  Card,
  Features,
  Filter,
  Footer,
  Hero,
  Logos,
  MobileHeader,
  ProfileBanner,
  Search,
  Start,
  WalletList,
} from '../components';

const banners = [
  { banner: '/images/banner.jpg', title: 'Snowden #1', value: '0.27 ETH', price: '$19,947.07', id: 1 },
  { banner: '/images/banner.jpg', title: 'Snowden #2', value: '0.27 ETH', price: '$19,947.07', id: 2 },
  { banner: '/images/banner.jpg', title: 'Snowden #3', value: '0.27 ETH', price: '$19,947.07', id: 3 },
  { banner: '/images/banner.jpg', title: 'Snowden #4', value: '0.27 ETH', price: '$19,947.07', id: 4 },
  { banner: '/images/banner.jpg', title: 'Snowden #5', value: '0.27 ETH', price: '$19,947.07', id: 5 },
];
const Profile = () => {
  const [items, setItems] = useState(banners);
  const [placeholder, setPlaceholder] = useState(null);
  const [sorted, setSorted] = useState(null);
  const nodeRefPositions = useRef([]);

  const _handleSortOver = ({ newIndex }) => {
    const ref = nodeRefPositions.current[newIndex];
    setPlaceholder(ref);
  };

  const _handleSortStart = ({ node, nodes, index }) => {
    setPlaceholder(node.getBoundingClientRect());
    setSorted(index);
    nodeRefPositions.current = nodes.map((node) => {
      return node.node.getBoundingClientRect();
    });
  };

  const _handleSortEnd = ({ oldIndex, newIndex }) => {
    const _items = arrayMoveImmutable([...items], oldIndex, newIndex);
    setItems(_items);
    setPlaceholder(null);
    setSorted(null);
  };
  return (
    <>
      <MobileHeader
        top={35}
        actions={<ProfileBanner name='Anders' avatar='/images/avatar.jpg' />}
        className='dashboard'
      />
      <div className='profile-wrapper'>
        <nav>
          <h1>@wilmaflint</h1>
          <span className='copy bg-gradient'>Copy</span>
        </nav>
        <article>
          <div className='content'>
            <Search />
            <Filter />
          </div>
        </article>
        <WalletList
          axis={'xy'}
          items={items}
          onSortStart={_handleSortStart}
          onSortOver={_handleSortOver}
          onSortEnd={_handleSortEnd}
          placeholder={placeholder}
          sorted={sorted}
          pressDelay={window.mobileAndTabletCheck() ? 400 : 50}
        />
      </div>
    </>
  );
};
export default Profile;

import Card from './Card';

const cards = [
  {
    banner: '',
    title: 'Snowden',
    author: 'Yngjake',
    avatar: '',
    value: '0.27 ETH',
    price: '$19,949.07',
    icon: '',
    currency: 'Polygon',
  },
  {
    banner: '',
    title: 'Snowden',
    author: 'Yngjake',
    avatar: '',
    value: '0.27 ETH',
    price: '$19,949.07',
    icon: '',
    currency: 'Polygon',
  },
  {
    banner: '',
    title: 'Snowden',
    author: 'Yngjake',
    avatar: '',
    value: '0.27 ETH',
    price: '$19,949.07',
    icon: '',
    currency: 'Polygon',
  },
];
const Cards = () => {
  return (
    <div className='cards-wrapper flex flex-col'>
      <h2>All your NFTs in one place.</h2>
      <div className='body'>
        <div className='flex title justify-between'>
          <div className='flex user items-center'>
            <img src='/images/avatar.jpg' alt={`Satoshi\'s profile image`} />
            <span className='name'>@Satoshi</span>
          </div>
          <div className='flex currency items-center'>
            <span className='value'>0.27 ETH</span>
            <span className='price'>23 NFTs</span>
          </div>
        </div>
        <div className='list flex'>
          {cards.map((card, i) => (
            <Card {...card} key={`card-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

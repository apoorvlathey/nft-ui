import Card from './Card';

const cards = [
  {
    banner: '/images/cards/card1.png',
    title: 'Snowden',
    author: 'Yngjake',
    avatar: '',
    value: '0.27 ETH',
    price: '$19,949.07',
    icon: '',
    currency: 'Polygon',
  },
  {
    banner: '/images/cards/card2.png',
    title: 'Snowden',
    author: 'Yngjake',
    avatar: '',
    value: '0.27 ETH',
    price: '$19,949.07',
    icon: '',
    currency: 'Polygon',
  },
  {
    banner: '/images/cards/card3.png',
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
      <div className='body'>
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

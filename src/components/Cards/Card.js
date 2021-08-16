const Card = ({ banner, title, author, avatar, value, price, icon, currency }) => {
  return (
    <div className='card-wrapper flex-1 bg-white'>
      <img src={banner || '/images/banner.jpg'} alt={`${title}'s banner image`} />
      <h3>{title}</h3>
      <div className='flex items-center user'>
        <img src={avatar || '/images/avatar.jpg'} alt={`${author}'s avatar`} />
        <span className='name'>{author}</span>
      </div>
      <div className='currency flex items-center'>
        <span className='value'>{value}</span>
        <span className='price'>{price}</span>
      </div>
      <div className='footer flex items-center'>
        <img src={icon || '/images/eth.png'} alt={`${currency}'s icon`} />
        <span className='currency'>{currency}</span>
      </div>
    </div>
  );
};

export default Card;

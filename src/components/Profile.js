const profiles = new Array(12).fill(null).map((_, i) => ({
  name: `@KavyonBeykpour - #${i + 1}`,
  price: '$330.000',
  value: '3.44 ETH',
  avatar: '/images/avatar.jpg',
  id: `id-${i}`,
}));

const Profiles = () => {
  return (
    <div className='profiles-wrapper'>
      <h2>Featured profiles</h2>
      <div className='content'>
        <div className='line'>
          {[...profiles, ...profiles].map((profile, i) => (
            <Profile {...profile} key={`${profile.id}-${i}-1`} />
          ))}
        </div>
        <div className='line'>
          {[...profiles, ...profiles].map((profile, i) => (
            <Profile {...profile} key={`${profile.id}-${i}-2`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Profile = ({ name, price, value, avatar }) => {
  return (
    <div className='profile-segment-wrapper'>
      <img src={avatar} alt={`${name}'s avatar`} />
      <div className='body'>
        <span className='name'>{name}</span>
        <span className='meta'>
          {value} // {price}
        </span>
      </div>
    </div>
  );
};

export default Profiles;

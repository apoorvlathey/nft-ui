import { Banner, Card, Features, Filter, Footer, Hero, Logos, MobileHeader, Search, Start } from '../components';
import { AuthSkeleton } from '../layout';

const banners = [
  { banner: '/images/banner.jpg', title: 'Snowden', value: '0.27 ETH', price: '$19,947.07' },
  { banner: '/images/banner.jpg', title: 'Snowden', value: '0.27 ETH', price: '$19,947.07' },
  { banner: '/images/banner.jpg', title: 'Snowden', value: '0.27 ETH', price: '$19,947.07' },
  { banner: '/images/banner.jpg', title: 'Snowden', value: '0.27 ETH', price: '$19,947.07' },
  { banner: '/images/banner.jpg', title: 'Snowden', value: '0.27 ETH', price: '$19,947.07' },
];

const Profile = () => {
  return (
    <>
      <MobileHeader top={35} actions={<></>} className='dashboard' />
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
        <main>
          {banners.map((banner, i) => (
            <Banner {...banner} key={`key-${i}`} />
          ))}
        </main>
      </div>
    </>
  );
};
export default Profile;

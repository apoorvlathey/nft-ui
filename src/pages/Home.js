import { Cards, Features, Footer, Hero, Logos, MobileHeader, Profile, Start } from '../components';

const Home = () => {
  return (
    <>
      <MobileHeader sticky />
      <div className='home-page-wrapper'>
        <Hero />
        <Cards />
        <Logos />
        <Features />
        <Profile />
        <Start />
        <Footer />
      </div>
    </>
  );
};
export default Home;

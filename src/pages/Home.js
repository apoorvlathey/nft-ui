import { Cards, Features, Footer, Hero, Logos, MobileHeader, Profile, Start } from '../components';

const Home = () => {
  return (
    <>
      <MobileHeader />
      <div className='home-page-wrapper'>
        <Hero />
        <Logos />
        <Cards />
        <Features />
        <Profile />
        <Start />
        <Footer />
      </div>
    </>
  );
};
export default Home;

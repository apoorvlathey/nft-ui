import { Cards, Features, Footer, Header, Hero, Logos, MobileHeader, Profile, Start } from '../components';

const Home = () => {
  return (
    <>
      {/* <Header /> */}
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

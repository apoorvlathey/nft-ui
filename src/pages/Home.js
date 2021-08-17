import { Cards, Features, Footer, Header, Hero, Logos, Profile, Start } from '../components';

const Home = () => {
  return (
    <>
      <Header />
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

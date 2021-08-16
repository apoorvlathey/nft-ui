import { Cards, Features, Footer, Header, Hero, Logos, Start } from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <div className='home-page-wrapper'>
        <Hero />
        <Logos />
        <Cards />
        <Features />
        <Start />
        <Footer />
      </div>
    </>
  );
};
export default Home;

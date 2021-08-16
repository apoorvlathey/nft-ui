import { Footer, Header, Hero, Logos } from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <div className='home-page-wrapper'>
        <Hero />
        <Logos />
        <Footer />
      </div>
    </>
  );
};
export default Home;

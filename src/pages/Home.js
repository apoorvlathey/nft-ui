import { Cards, Features, Footer, Hero, Logos, MobileHeader, Profile, Start } from '../components';
import { emojisplosion, emojisplosions } from 'emojisplosion';
const Home = () => {
  const _handleClick = (e) => {
    console.log(e);
    emojisplosion({
      emojis: ['🤌'],
      emojiCount: 12,
      physics: {
        gravity: 0.8,
        initialVelocities: {
          y: {
            min: -25,
            max: -11.7,
          },
        },
      },
      position: () => ({ x: e.pageX, y: e.pageY - window.scrollY }),
    });
  };
  return (
    <>
      <MobileHeader sticky />
      <div className='home-page-wrapper' onClick={_handleClick}>
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

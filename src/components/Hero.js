import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-screen flex flex-col items-center hero-wrapper'>
      <h2>Show the world</h2>
      <p>
        A dope showroom for <strong>all</strong> your NFTs
      </p>
      <Link to='/username' className='bg-gradient rounded-full'>
        Claim username
      </Link>
      {/* <img src='/images/hero.png' alt='' /> */}
      {/* <svg preserveAspectRatio='none' viewBox='0 0 2048 2048'>
        <defs>
          <linearGradient id='hero-gradient' x1='0.4' x2='0' y1='0' y2='1'>
            <stop offset='0%' stop-color='#8ca5fd' />
            <stop offset='75%' stop-color='#d6e0fa' stop-opacity='0' />
            <stop offset='100%' stop-color='rgba(0, 0, 0, 0)' />
          </linearGradient>
        </defs>
        <rect width='2048' height='2048' fill='url(#hero-gradient)' />
      </svg> */}
    </div>
  );
};

export default Hero;

const Hero = () => {
  return (
    <div className='w-screen flex flex-col items-center hero-wrapper'>
      <h2>Show the world</h2>
      <p>A dope showroom for your NFTs</p>
      <a className='bg-gradient rounded-full'>Claim username</a>
      <img src='/images/hero.png' alt='' />
    </div>
  );
};

export default Hero;

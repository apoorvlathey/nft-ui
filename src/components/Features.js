const Features = () => {
  return (
    <div className='features-wrapper'>
      <h2>One link. All your NFTs.</h2>
      <p>Your belter of a collection needs a proper showroom.</p>
      <img src='/images/ninja-full.png' alt='Ninja' className='ninja' />
      <div className='feature-list'>
        <Feature
          icon='profile'
          title='@unique_username'
          description='Grab your magic internet name before someone else does.'
        />
        <Feature
          icon='paper'
          title='Blockfolio 2.0'
          description='Track the floor price of all your NFTs. Must. Check. One. More. Time.'
        />
        <Feature
          icon='paper_plus'
          title='Plenty of integrations'
          description='Currently supporting Ethereum, Polygon and NBA Topshots. More coming soon.'
        />
        <Feature
          icon='wallet'
          title='Extensive wallet support'
          description='Whatever wallet you keep your NFTs in, we support it. Mostly.'
        />
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className='feature-wrapper'>
      <div className='icon-wrapper'>
        <img src={`/images/features/${icon}.png`} alt={`${title}'s icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Features;

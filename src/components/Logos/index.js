import logo1 from './LOGO_1.svg';
import logo2 from './LOGO_2.svg';
import logo3 from './LOGO_3.svg';
import logo4 from './LOGO_4.svg';
import logo5 from './LOGO_5.svg';
import logo6 from './LOGO_6.svg';

const logos = [logo1, logo2, logo4, logo5, logo6];

const Logos = () => {
  return (
    <div className='logos-wrapper text-center flex flex-col items-center'>
      <h2>Ethereum, Polygon and more.</h2>
      <p>We support all your favorite blockchains and projects.</p>
      <div className='flex items-center justify-center'>
        {logos.map((logo, i) => (
          <Logo logo={logo} key={`logo-${i}`} soon={i > 2} />
        ))}
      </div>

      {/* <Logo /> */}
    </div>
  );
};

const Logo = ({ logo, soon }) => {
  return (
    <div>
      {soon && (
        <span>
          <span>Coming soon</span>
        </span>
      )}
      <img src={logo} alt='' />
    </div>
  );
};

export default Logos;

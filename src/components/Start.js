import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='start-wrapper flex flex-col items-center'>
      <h2>Snatch your username today</h2>
      <p>
        Here is your change to <strong>finally</strong> get that cool internet name you always wanted.
      </p>
      <Link to='/username' className='bg-gradient'>
        Get started
      </Link>
      <img src='/images/success.png' alt='Get started success image' />
    </div>
  );
};

export default Start;

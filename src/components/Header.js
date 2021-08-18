import classNames from 'classnames';
import { Logo } from '.';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const _handleResize = () => setIsDisplayed(window.innerWidth > 1000);
  useEffect(() => {
    _handleResize();
    window.addEventListener('resize', _handleResize);
    return () => window.removeEventListener('resize', _handleResize);
  }, []);

  if (!isDisplayed) return null;
  return (
    <header className={classNames('header-wrapper fixed flex justify-between items-center w-screen top-0')}>
      <Logo />
      <div className='actions'>
        <a href='/register' className={classNames('primary bg-gradient rounded-full')}>
          Register
        </a>
        <a href='/login'>Login</a>
      </div>
    </header>
  );
};

export default Header;

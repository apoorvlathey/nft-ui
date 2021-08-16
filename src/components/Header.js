import classNames from 'classnames';
import { Logo } from '.';

const Header = () => {
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

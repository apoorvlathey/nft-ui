import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Logo } from '.';
import { Link } from 'react-router-dom';

const building = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.9918 4.17144L12.0001 4.1671L12.0089 4.17163L16.4623 6.8437L18.0001 7.77022V18.8003C18.0001 19.3933 17.9986 19.7179 17.9795 19.951L17.9772 19.9774L17.9509 19.9797C17.7177 19.9987 17.3932 20.0003 16.8001 20.0003H7.20012C6.60707 20.0003 6.28256 19.9987 6.04939 19.9797L6.02302 19.9774L6.02073 19.951C6.00168 19.7179 6.00012 19.3933 6.00012 18.8003V7.77025L7.53229 6.84712L11.9918 4.17144ZM6.50181 5.13303L1.48566 8.14272C1.01208 8.42687 0.85851 9.04113 1.14266 9.51471C1.42681 9.98829 2.04107 10.1419 2.51465 9.85771L4.00012 8.96642V18.8003C4.00012 19.9204 4.00012 20.4804 4.21811 20.9083C4.40986 21.2846 4.71582 21.5906 5.09214 21.7823C5.51996 22.0003 6.08002 22.0003 7.20012 22.0003H16.8001C17.9202 22.0003 18.4803 22.0003 18.9081 21.7823C19.2844 21.5906 19.5904 21.2846 19.7821 20.9083C20.0001 20.4804 20.0001 19.9204 20.0001 18.8003V8.96639L21.4857 9.85771C21.9592 10.1419 22.5735 9.98829 22.8576 9.51471C23.1418 9.04113 22.9882 8.42687 22.5146 8.14272L17.4927 5.12957L13.6515 2.81528C13.3723 2.64702 13.158 2.5179 12.9763 2.42081C12.9339 2.3971 12.8909 2.37505 12.8473 2.35465C12.6962 2.28089 12.5651 2.2318 12.4305 2.20213C12.147 2.13965 11.8533 2.13965 11.5697 2.20214C11.4348 2.23188 11.3034 2.28115 11.1518 2.35523C11.109 2.37529 11.0667 2.39695 11.0251 2.42021C10.8432 2.51737 10.6286 2.64667 10.3487 2.81528L6.50181 5.13303Z'
      fill='#7A7786'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13 20V16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16V20H13ZM12 13C10.3431 13 9 14.3431 9 16V22H15V16C15 14.3431 13.6569 13 12 13Z'
      fill='#7A7786'
    />
  </svg>
);

const home = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19 12H14V20H19C19.5523 20 20 19.5523 20 19V13C20 12.4477 19.5523 12 19 12ZM12 10V22H19C20.6569 22 22 20.6569 22 19V13C22 11.3431 20.6569 10 19 10H12Z'
      fill='#7A7786'
    />
    <path
      d='M18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16C17.5523 16 18 15.5523 18 15Z'
      fill='#7A7786'
    />
    <path
      d='M18 18C18 17.4477 17.5523 17 17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z'
      fill='#7A7786'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H11C12.6569 2 14 3.34315 14 5V22H5ZM5 4H11C11.5523 4 12 4.44772 12 5V20H10V19C10 18.4477 9.55229 18 9 18H7C6.44772 18 6 18.4477 6 19V20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4Z'
      fill='#7A7786'
    />
    <path
      d='M9 6C9.55229 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8H7C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6H9Z'
      fill='#7A7786'
    />
    <path
      d='M9 10C9.55229 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H9Z'
      fill='#7A7786'
    />
    <path
      d='M10 15C10 14.4477 9.55229 14 9 14H7C6.44772 14 6 14.4477 6 15C6 15.5523 6.44772 16 7 16H9C9.55228 16 10 15.5523 10 15Z'
      fill='#7A7786'
    />
  </svg>
);

const Mobile = ({ actions, top }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const _handleToggle = () => setIsCollapsed(!isCollapsed);

  const _handleScroll = () => setIsScrolled(window.scrollY > 20);
  useEffect(() => {
    _handleScroll();
    window.addEventListener('scroll', _handleScroll);
    return () => window.removeEventListener('scroll', _handleScroll);
  });

  return (
    <>
      <header
        style={top ? { top } : undefined}
        className={classNames(
          'mobile-header-wrapper fixed flex justify-between items-center w-screen top-0 ',
          isScrolled && 'scrolled',
        )}
      >
        <Link to='/'>
          <Logo />
        </Link>
        <div onClick={_handleToggle} className={classNames('hamburger', isCollapsed && 'collapsed')}>
          <span />
          <span />
        </div>
        <div className='actions'>
          {actions || (
            <>
              <Link to='/register' className={classNames('primary bg-gradient rounded-full')}>
                Register
              </Link>
              <Link to='/login'>Login</Link>
            </>
          )}
        </div>
        <nav className={classNames('mobile-menu-wrapper', isCollapsed && 'collapsed')}>
          <Link className='regular' to='/'>
            {home}
            <span>Home</span>
          </Link>
          <Link className='regular' to='/about'>
            {building}
            <span>About us</span>
          </Link>
          <Link to='/register' className='primary bg-gradient'>
            <span>Register</span>
          </Link>
          <Link to='/login' className='secondary'>
            <span>Login</span>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Mobile;

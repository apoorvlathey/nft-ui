const AuthSkeleton = ({ children }) => {
  return (
    <div className='auth-page-wrapper'>
      <svg preserveAspectRatio='none' className='gradient' viewBox='0 0 2048 2048'>
        <defs>
          <linearGradient id='hero-gradient' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0%' stop-color='#8ca5fd' />
            <stop offset='75%' stop-color='#d6e0fa' stop-opacity='0' />
            <stop offset='100%' stop-color='rgba(255, 255, 255, 0)' />
          </linearGradient>
        </defs>
        <rect width='2048' height='2048' fill='url(#hero-gradient)' />
      </svg>
      {children}
    </div>
  );
};

export default AuthSkeleton;

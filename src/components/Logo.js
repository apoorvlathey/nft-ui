const { default: classNames } = require('classnames');

const Logo = () => {
  return (
    <div className={classNames('flex items-center logo-wrapper')}>
      <div className={classNames('w-8 h-8 rounded-full bg-indigo-700')}></div>
      <h1>Logo</h1>
    </div>
  );
};

export default Logo;

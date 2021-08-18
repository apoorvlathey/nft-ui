import classNames from 'classnames';

const Card = ({ title, subtitle, action, href, className }) => {
  return (
    <div className={classNames('card-container', className)}>
      <div className={classNames('card-segment-wrapper', className)}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <a href={href} className='bg-gradient'>
          <span>{action}</span>
        </a>
      </div>
    </div>
  );
};

export default Card;

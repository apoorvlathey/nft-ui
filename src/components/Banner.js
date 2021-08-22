import classNames from 'classnames';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const Banner = ({ value: { banner, title, value, price }, active }) => {
  return (
    <div className={classNames('banner-segment-container', active && 'active')}>
      <div className='wrapper'>
        <img src={banner} alt={`${title}'s banner`} />
        <h2>
          {title}
          {active && 'active'}
        </h2>
        <div className='body'>
          <div className='price'>{price}</div>
          <span className='value'>{value}</span>
        </div>
      </div>
    </div>
  );
};

export default SortableElement(Banner);

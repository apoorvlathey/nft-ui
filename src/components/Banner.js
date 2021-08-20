import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const Banner = ({ value: { banner, title, value, price } }) => {
  return (
    <div className='banner-segment-wrapper'>
      <img src={banner} alt={`${title}'s banner`} />
      <h2>{title}</h2>
      <div className='body'>
        <div className='price'>{price}</div>
        <span className='value'>{value}</span>
      </div>
    </div>
  );
};

export default SortableElement(Banner);

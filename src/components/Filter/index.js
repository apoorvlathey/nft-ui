import { useState } from 'react';
import Option from './Option';

const icon = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M7.7599 6.21376C7.7599 5.12681 6.86462 4.24192 5.76229 4.24192C4.66113 4.24192 3.76467 5.12681 3.76467 6.21376C3.76467 7.30072 4.66113 8.18561 5.76229 8.18561C6.86462 8.18561 7.7599 7.30072 7.7599 6.21376ZM9.52457 6.21376C9.52457 8.26109 7.83754 9.92753 5.76229 9.92753C3.68821 9.92753 2 8.26109 2 6.21376C2 4.16643 3.68821 2.5 5.76229 2.5C7.83754 2.5 9.52457 4.16643 9.52457 6.21376ZM22 6.214C22 5.73323 21.6047 5.34304 21.1177 5.34304H13.8825C13.3954 5.34304 13.0002 5.73323 13.0002 6.214C13.0002 6.69476 13.3954 7.08495 13.8825 7.08495H21.1177C21.6047 7.08495 22 6.69476 22 6.214ZM16.2397 17.7862C16.2397 18.8732 17.135 19.7581 18.2374 19.7581C19.3397 19.7581 20.235 18.8732 20.235 17.7862C20.235 16.6981 19.3397 15.8144 18.2374 15.8144C17.135 15.8144 16.2397 16.6981 16.2397 17.7862ZM14.4751 17.7862C14.4751 15.7377 16.1621 14.0725 18.2374 14.0725C20.3126 14.0725 21.9996 15.7377 21.9996 17.7862C21.9996 19.8336 20.3126 21.5 18.2374 21.5C16.1621 21.5 14.4751 19.8336 14.4751 17.7862ZM2.88316 16.9149H10.1172C10.6042 16.9149 10.9995 17.3051 10.9995 17.7859C10.9995 18.2667 10.6042 18.6568 10.1172 18.6568H2.88316C2.39611 18.6568 2.00082 18.2667 2.00082 17.7859C2.00082 17.3051 2.39611 16.9149 2.88316 16.9149Z'
      fill='#58536D'
    />
  </svg>
);

const options = [
  {
    value: 'ETH',
    label: 'Ethereum',
  },
  {
    value: 'poly',
    label: 'Polygon',
  },
  {
    value: 'NBA',
    label: 'NBA Topshots',
  },
  {
    value: 'Binance',
    label: 'Binance Smart Chain',
  },
];

const Filter = () => {
  const [value, setValue] = useState([]);

  const _handleSelect = (val) => () => {
    if (!val) setValue([]);
    else {
      const _value = [...value];
      if (_value.includes(val)) _value.splice(_value.indexOf(val), 1);
      else _value.push(val);
      setValue(_value);
    }
  };
  return (
    <div className='filter-wrapper'>
      <div className='title'>
        {icon} <span>Filters</span>
      </div>
      <div className='select-wrapper'>
        <Option onSelect={_handleSelect(null)} label='All' active={!value.length} />
        {options.map((option) => (
          <Option active={value.includes(option.value)} onSelect={_handleSelect(option.value)} label={option.label} />
        ))}
      </div>
    </div>
  );
};

export default Filter;

import classNames from 'classnames';

const Option = ({ label, active, onSelect }) => {
  return (
    <div onClick={onSelect} className={classNames('option-wrapper', active && 'active')}>
      <div className='knob-wrapper'>
        <div className='knob' />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default Option;

import { useState } from 'react';
import { Cards, Features, Footer, Hero, Logos, MobileHeader, Profile, Start } from '../components';
import Input from '../components/Input';

const Username = () => {
  const [username, setUsername] = useState('');
  const [state, setState] = useState(null); // null | 'ERROR' | 'SUCCESS';
  const [error, setError] = useState('Username already taken'); // null | 'ERROR' | 'SUCCESS';

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setState(state === 'ERROR' ? 'SUCCESS' : 'ERROR');
  };
  const _handleCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setState(null);
  };
  const _handleChange = ({ target: { value } }) => setUsername(value);
  return (
    <>
      <MobileHeader actions={<></>} />
      <div className='username-page-wrapper'>
        <form onSubmit={_handleSubmit}>
          <h1>Grab your magic internet name</h1>
          <div className='row'>
            <Input username value={username} onChange={setUsername} state={state} error={error} />
            <button disabled={state === 'ERROR'} type='submit' className='primary bg-gradient'>
              Apply
            </button>
            <button onClick={_handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Username;

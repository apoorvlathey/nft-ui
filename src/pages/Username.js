import { useState } from 'react';
import { Cards, Features, Footer, Hero, Logos, MobileHeader, Profile, Start } from '../components';
import classNames from 'classnames';

const errorIcon = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.0098 14.9992C15.3498 14.6602 15.3498 14.1102 15.0098 13.7702L13.2298 11.9902L15.0098 10.2092C15.3498 9.87021 15.3498 9.31021 15.0098 8.97021C14.6698 8.62921 14.1198 8.62921 13.7698 8.97021L11.9998 10.7492L10.2198 8.97021C9.8698 8.62921 9.3198 8.62921 8.9798 8.97021C8.6398 9.31021 8.6398 9.87021 8.9798 10.2092L10.7598 11.9902L8.9798 13.7602C8.6398 14.1102 8.6398 14.6602 8.9798 14.9992C9.1498 15.1692 9.3798 15.2602 9.5998 15.2602C9.8298 15.2602 10.0498 15.1692 10.2198 14.9992L11.9998 13.2302L13.7798 14.9992C13.9498 15.1802 14.1698 15.2602 14.3898 15.2602C14.6198 15.2602 14.8398 15.1692 15.0098 14.9992Z'
      fill='#FF6752'
    />
  </svg>
);

const successIcon = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.4301 14.9899L16.1801 10.2399C16.5201 9.89991 16.5201 9.34991 16.1801 8.99991C15.8401 8.65991 15.2801 8.65991 14.9401 8.99991L10.8101 13.1299L9.06011 11.3799C8.72011 11.0399 8.16011 11.0399 7.82011 11.3799C7.48011 11.7199 7.48011 12.2699 7.82011 12.6199L10.2001 14.9899C10.3701 15.1599 10.5901 15.2399 10.8101 15.2399C11.0401 15.2399 11.2601 15.1599 11.4301 14.9899Z'
      fill='#2CBF93'
    />
  </svg>
);
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
            <div className={classNames('input-wrapper', state?.toLowerCase())}>
              <input value={username} onChange={_handleChange} type='text' placeholder='@username' />
              {state === 'ERROR' && errorIcon}
              {state === 'SUCCESS' && successIcon}
              {state === 'ERROR' ? (
                <span className='error'>
                  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8.00004 2.33325C4.87537 2.33325 2.33337 4.87525 2.33337 7.99992C2.33337 11.1246 4.87537 13.6666 8.00004 13.6666C11.1247 13.6666 13.6667 11.1246 13.6667 7.99992C13.6667 4.87525 11.1247 2.33325 8.00004 2.33325ZM8.00004 14.6666C4.32404 14.6666 1.33337 11.6759 1.33337 7.99992C1.33337 4.32392 4.32404 1.33325 8.00004 1.33325C11.676 1.33325 14.6667 4.32392 14.6667 7.99992C14.6667 11.6759 11.676 14.6666 8.00004 14.6666Z'
                      fill='#FF6752'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M7.99609 8.91524C7.72009 8.91524 7.49609 8.69124 7.49609 8.41524V5.46924C7.49609 5.19324 7.72009 4.96924 7.99609 4.96924C8.27209 4.96924 8.49609 5.19324 8.49609 5.46924V8.41524C8.49609 8.69124 8.27209 8.91524 7.99609 8.91524Z'
                      fill='#FF6752'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8.00264 11.1971C7.63397 11.1971 7.33264 10.8991 7.33264 10.5304C7.33264 10.1618 7.62797 9.86377 7.99597 9.86377H8.00264C8.37131 9.86377 8.66931 10.1618 8.66931 10.5304C8.66931 10.8991 8.37131 11.1971 8.00264 11.1971Z'
                      fill='#FF6752'
                    />
                  </svg>

                  {error}
                </span>
              ) : (
                <span>
                  https://untitled.com/
                  {username ? `@${username}` : <span>@username</span>}
                </span>
              )}
            </div>
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

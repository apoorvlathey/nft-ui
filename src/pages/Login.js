import { useContext, useEffect, useState } from 'react';
import { Card, Features, Footer, Hero, Logos, MobileHeader, Profile, Start } from '../components';
import { AuthSkeleton } from '../layout';
import { useHistory } from 'react-router-dom';
import { magic } from '../lib/magic';
import { UserContext } from '../lib/UserContext';

const Login = () => {
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useContext(UserContext);

    // If user is already logged in, redirect to profile page
  useEffect(() => {
      user && user.issuer && history.push('/');
    }, [user, history]);

  async function handleLoginWithEmail(email) {
    try {
      setDisabled(true); // disable login button to prevent multiple emails from being triggered

      // Trigger Magic link to be sent to user
      let didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL('/', window.location.origin).href, // optional redirect back to your app after magic link is clicked
      });

      // Validate didToken with server
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
      });

      if (res.status === 200) {
        // Set the UserContext to the now logged in user
        let userMetadata = await magic.user.getMetadata();
        await setUser(userMetadata);
        history.push('/profile');
      }
    } catch (error) {
      setDisabled(false); // re-enable login button - user may have requested to edit their email
      console.log(error);
    }
  }
  return (
    <>
      <MobileHeader
        actions={
          <>
            <a>Don't have an account?</a>
            <a href='/register' className='primary bg-gradient rounded-full'>
              Register
            </a>
          </>
        }
      />
      <AuthSkeleton>
        <Card
          className='login'
          title={`Hey! You're back!`}
          subtitle='Could you add more text here that  user easily understand!'
          action='Login'
        />
      </AuthSkeleton>
    </>
  );
};
export default Login;

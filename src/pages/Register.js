import { Card, Features, Footer, Hero, Logos, MobileHeader, Profile, Start } from '../components';
import { AuthSkeleton } from '../layout';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../lib/UserContext';
import { magic } from '../lib/magic';

const Register = () => {
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useContext(UserContext);

  // If user is already logged in, redirect to profile page
  useEffect(() => {
    user && user.issuer && history.push('/');
  }, [user, history]);
  
  return (
    <>
      <MobileHeader
        actions={
          <>
            <a>Already have an account?</a>
            <a href='/login' className='primary bg-gradient rounded-full'>
              Login
            </a>
          </>
        }
      />
      <AuthSkeleton>
        <Card
          className='register'
          title={`Create user`}
          subtitle='Could you add more text here that  user easily understand!'
          action='Register with Magic Link'
        />
      </AuthSkeleton>
    </>
  );
};
export default Register;

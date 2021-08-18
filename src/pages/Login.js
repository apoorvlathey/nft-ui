import { Card, Features, Footer, Hero, Logos, MobileHeader, Profile, Start } from '../components';
import { AuthSkeleton } from '../layout';

const Login = () => {
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

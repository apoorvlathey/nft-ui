import { Card, Features, Footer, Hero, Logos, MobileHeader, Profile, Start } from '../components';
import { AuthSkeleton } from '../layout';

const Register = () => {
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

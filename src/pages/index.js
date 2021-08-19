import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Home';
import Profile from './Profile';
import Register from './Register';
import Login from './Login';
import Username from './Username';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Register} path='/register' exact />
        <Route component={Profile} path='/profile' exact />
        <Route component={Login} path='/login' exact />
        <Route component={Username} path='/username' exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

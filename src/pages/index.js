import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Home';
import Register from './Register';
import Login from './Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Register} path='/register' exact />
        <Route component={Login} path='/login' exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { magic } from '../lib/magic';
import { UserContext } from '../lib/UserContext';
// Pages
import Creation from './Creation';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import Username from './Username';


function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const Router = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      return isLoggedIn
        ? magic.user.getMetadata().then((userData) => setUser(userData))
        : setUser({ user: null });
    });
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Web3ReactProvider getLibrary={getLibrary}>
          <UserContext.Provider value={[user, setUser]}>
            <Route component={Home} path='/' exact />
            <Route component={Register} path='/register' exact />
            <Route component={Profile} path='/profile' exact />
            <Route component={Login} path='/login' exact />
            <Route component={Username} path='/username' exact />
            <Route component={Creation} path='/creation' exact />
          </UserContext.Provider> 
        </Web3ReactProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

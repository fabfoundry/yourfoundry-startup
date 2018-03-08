import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


// Containers
import Home from './containers/Home';
import Account from './containers/Account';
import Profile from './containers/Profile';
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';
import Contracts from './containers/Contracts';


export const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/account/create" component={CreateAccount} />
        <Route path="/login" component={Login} />
        <Route path="/account/profile" component={(history) => (
            !!sessionStorage.jwt ? <Profile history={history.history} /> : <Redirect to="/login" />
          )}  />
        <Route path="/account/home/projects/:id/contracts" component={(history) => (
            !!sessionStorage.jwt ? <Contracts history={history.history} match={history.match}/> : <Redirect to="/login" />
          )}  />
        <Route path="/account/home" component={(history) => (
            !!sessionStorage.jwt ? <Account history={history.history} /> : <Redirect to="/login" />
          )}  />
        <Route path="/" component={(history) => (
            !!sessionStorage.jwt ? <Redirect to="/account/home" /> : <Home history={history.history}/>
          )}  />
      </Switch>
    </BrowserRouter>
  )
}

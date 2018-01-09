import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


// Containers
import Home from './containers/Home';
import Account from './containers/Account';
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';


export const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/account/create" component={CreateAccount} />
        <Route path="/login" component={Login} />
        <Route path="/account/home" component={(history) => (
            !!sessionStorage.jwt ? <Account history={history.history} /> : <Redirect to="/login" />
          )}  />
        <Route path="/" component={(history) => (
            !!sessionStorage.jwt ? <Account history={history.history} /> : <Home history={history.history}/>
          )}  />
      </Switch>
    </BrowserRouter>
  )
}

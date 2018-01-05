import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';

// Containers
import Home from './containers/Home';

export const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/account/create" component={CreateAccount} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

import React from 'react';
import App from '../App';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Route exact path="/venue" component={App} />
      <Route exact path="/xfinity" component={App} />
    </div>
  )
}
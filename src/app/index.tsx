import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { App as TodoApp, Home as HomePage } from 'app/containers';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/todo" component={TodoApp} />
    <Route path="/" component={HomePage} />
  </Switch>
));

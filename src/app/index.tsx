import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { App as TodoApp, Home as HomePage } from 'app/containers';
import { Header } from 'app/components/';

export const App = hot(module)(() => (
  <div>
    <Header></Header>
    <Main></Main>
  </div>
));

const Main = () => {
  return (
    <Switch>
      <Route path="/todo" component={TodoApp} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

// const extraProps = { color: 'red' }
// <Route path='/page' render={(props) => (
//   <Page {...props} data={extraProps}/>
// )}/>
// <Route path='/page' children={(props) => (
//   props.matchx
//     ? <Page {...props}/>
//     : <EmptyPage {...props}/>
// )}/>

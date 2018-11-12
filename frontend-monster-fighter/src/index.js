import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './Game';
import Login from './components/Login'
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path="/" as="/login" component={Login} />
      <Route exact path="/game" component={Game} />
    </React.Fragment>
  </Router>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

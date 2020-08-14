import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Sentence from './Sentence';
import Paragraph from './Paragraph';
import LoginScreen from './Login';

import Database from './DatabaseManager';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/*<p><span>This is a section of the same</span><span onClick={selectSection2} className="hoverElement"> paragraph that can be with multiple selection.</span></p>*/}

    {<Main />}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function Main() {

  window.mapping = {};
  var db = new Database();

  //
  return (
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
  //
}
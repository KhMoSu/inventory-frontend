import './App.css';
import React, { useState } from 'react';
import List from './list';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Item from './Item';

export default function App() {
  return (
    <Router>
      <div className="App">
        <p>this is connected!</p>
        <Switch>
          <Route exact path="/">
            {/* <AuthPage /> */}
          </Route>
          <Route exact path="/items">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

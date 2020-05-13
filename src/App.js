import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import History from './components/History';

function App() {
  return (
    <>
      <Router history={History}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/search' component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

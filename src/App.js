import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import List from './pages/list';
import Create from './pages/create';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/create' component={Create} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;

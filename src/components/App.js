import React from 'react';
import '../styles/App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Properties />
      </Route>
      <Route exact path="/add-property">
        <AddProperty />
      </Route>
    </Switch>
    <h1>SurReal Estate</h1>
  </div>
);

export default App;

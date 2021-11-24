import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const PlushPage = () => (
  <div>
    <h1>PLUSH PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/plush' component={PlushPage} />
      </Switch>
    </div>
  );
}

export default App;

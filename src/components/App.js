import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Profile } from './Profile';
import { Home } from './Home';
import { About } from './About';

const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;

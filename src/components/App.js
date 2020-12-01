import React from 'react';

import {Profile} from './Profile'
import {Home} from './Home'
import {About} from './About'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = ()  =>(
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

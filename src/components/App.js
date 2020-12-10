import React from 'react';

import {Profile} from './Profile'
import {Home} from './Home'
import {About} from './About'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Layout from  './Layout';

const App = ()  =>(
    <Router>
      <Layout>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </Layout>
  </Router>
    ); 

export default App;

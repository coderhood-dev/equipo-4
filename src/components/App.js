import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from './Profile';
import Home from './Home';
import About from './About';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Layout from './Layout';
import SearchResultsPage from './SearchResultsPage';
import ItemRecipe from './ItemRecipe';

const App = () => (
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
        <Route path="/search">
          <SearchResultsPage />
        </Route>
        <Route path="/recipe">
          <ItemRecipe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;

import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SearchResultsPage from './SearchResultsPage';
import ViewRecipe from './ViewRecipe';

export default function ModalSwitch() {
  const location = useLocation();
  const background = location.state && location.state.background;
  /* if state is undefined, defaults to undefined, if state exists defaults to state.background */
  /* SEE SHORTCIRCUIT EVALUATION */

  return (
    <>
      {/* if background is undefined, defaults to location; if background is defined defaults to background */}
      <Switch location={background || location}>
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
        <Route path="/recipes">
          <ViewRecipe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      {/* if background is undefined defaults to undefined; if background is defined, defaults to second argument */}
      {background && (
        <>
          <Route path="/recipes">
            <ViewRecipe />
          </Route>
        </>
      )}
    </>
  );
}

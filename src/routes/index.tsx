import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';

const Routes = () => {
  const weekPaths = [
    '/sunday',
    '/monday',
    '/tuesday',
    '/wednesday',
    '/thursday',
    '/friday',
    '/saturday'
  ];

  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path={weekPaths}>
        <Home />
      </Route>
      <Route>
        <p>error</p>
      </Route>
    </Router>
  );
}

export default Routes;

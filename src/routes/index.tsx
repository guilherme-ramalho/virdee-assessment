import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import HourlyForecast from '../pages/HourlyForecast';

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
      <Route path="/" exact component={Home} />
      <Route path={weekPaths} component={Home} />
    </Router>
  );
}

export default Routes;

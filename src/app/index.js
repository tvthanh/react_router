import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Modules require
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Archives from './pages/Archives';
import Contact from './pages/Contact';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path={"/"} component={Layout}>
      <IndexRoute component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/news"} component={News} />
      <Route path={"/archives"} component={Archives} />
      <Route path={"/contact"} component={Contact} />
    </Route>
  </Router>,
  app
);

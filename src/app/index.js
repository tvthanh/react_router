import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Modules require
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Feature from './pages/Feature';
import Contact from './pages/Contact';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="feature" component={Feature} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  app
);

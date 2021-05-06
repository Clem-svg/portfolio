/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from 'pages/Home';
import Footer from 'components/Shared/Footer';
import Navbar from 'components/Shared/Navbar';
import Code from 'pages/Code';
import Contact from 'pages/Contact';
import 'style.scss';

const App = () => (
  <Router>
    <main>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/portfolio" exact>
          <Home />
        </Route>
        <Route path="/code">
          <Code />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

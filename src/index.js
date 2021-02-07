import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css'
import './css/flaticon.css';
import './css/icomoon.css';
import { Navbar, Footer, Home, Gallery, About, Classes, Schedule } from './components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home.html">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/gallery.html">
          <Gallery />
        </Route>
      </Switch>
      <Switch>
        <Route path="/about.html">
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route path="/classes.html">
          <Classes />
        </Route>
      </Switch>
      <Switch>
        <Route path="/schedule.html">
          <Schedule range="month" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

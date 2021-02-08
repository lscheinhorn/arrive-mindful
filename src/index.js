import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css'
import './css/flaticon.css';
import './css/icomoon.css';
import { Navbar, Footer, Home, Gallery, About, Classes, Schedule, Blog } from './components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route path="/classes">
          <Classes />
        </Route>
      </Switch>
      <Switch>
        <Route path="/schedule">
          <Schedule range="month" banner={true} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

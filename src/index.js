import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css'
import './css/flaticon.css';
import './css/icomoon.css';
import { Navbar, Footer, Home, Gallery, About, Classes, Schedule, Blog, Contact } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/home"
          element={<Home />}
        />
        <Route 
          path="/gallery"
          element={<Gallery banner={true} />}
        />
        <Route 
          path="/about"
          element={<About />}
        />
        <Route 
          path="/classes"
          element={<Classes />}
        />
        <Route 
          path="/schedule"
          element={<Schedule range="month" banner={true} />}
        />
        <Route 
          path="/blog"
          element={<Blog />}
        />
        <Route 
          path="contact"
          element={<Contact />}
        />
        <Route 
          exact path="/"
          element={<Home />}
        />
      </Routes>
      <Footer />
    </Router>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

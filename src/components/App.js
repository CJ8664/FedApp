import React, { Component } from 'react';
import fire from '../js/fire';
import logo from '../images/logo.svg';
import Header from './views/Header'
import Main from './views/Main'
import Footer from './views/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Link } from 'react-router-dom'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
const bootstrap = require('bootstrap');

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App

/* eslint-disable react/jsx-filename-extension */
/* global window, document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//hydratePage=()=> {
if (typeof window !== 'undefined') {
  ReactDOM.hydrate(<App />, document.getElementById('app'));
}

//};

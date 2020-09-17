/* eslint-disable react/jsx-filename-extension */
/* global window, document */

import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapApp from './BootstrapApp';
import 'bootstrap/dist/css/bootstrap.min.css';

//hydratePage=()=> {
if (typeof window !== 'undefined') {
  ReactDOM.hydrate(<BootstrapApp />, document.getElementById('bootstrapApp'));
}

//};

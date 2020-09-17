import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapApp from './BootstrapApp';
import 'bootstrap/dist/css/bootstrap.min.css';

if (typeof window !== 'undefined') {
  ReactDOM.hydrate(<BootstrapApp />, document.getElementById('bootstrapApp'));
}
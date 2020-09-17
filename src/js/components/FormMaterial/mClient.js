import React from 'react';
import ReactDOM from 'react-dom';
import MaterialApp from './MaterialApp';
//import 'bootstrap/dist/css/bootstrap.min.css';

if (typeof window !== 'undefined') {
  ReactDOM.hydrate(<MaterialApp />, document.getElementById('materialApp'));
}
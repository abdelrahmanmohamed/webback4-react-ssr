import React from 'react';
import App from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";

if (typeof window !== 'undefined') {
    ReactDOM.hydrate(<App/>, document.getElementById('registerApp'));
}

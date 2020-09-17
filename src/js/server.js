/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet} from 'styled-components';

import App from './components/App';
import Layout from './components/Layout';

const port = 3000;
const server = express();

const cors = require('cors');

server.use(cors())
server.use(express.static('dist'));
server.use(express.static('images'));


function renderComponent(component) {
    const sheet = new ServerStyleSheet();

    const body = renderToString(sheet.collectStyles(component)); // get styles
    const styles = sheet.getStyleTags(); // getting all the tags from the sheet

    return {
        body,
        styles, // passing the styles to our Layout template
    };
}

// Creating a single index route to server our React application from.
server.get('/aaa', (req, res) => {
    const title = 'React Server Side Rendering with Styled Components';
    const renderedComponent = renderComponent(<App/>);
    res.set('Content-Type', 'text/html')
      .set('Access-Control-Allow-Origin', ' *')
      .send(Layout({title, ...renderedComponent}));
});

server.get('/', (req, res) => {
    const wrapDivStart = `<div id="app">`;
    const body = renderToString(<App/>);
    const wrapDivEnd = `</div>`;
    const hydrateScript = `<script src="http://localhost:3000/client.js"></script>`;
    const result = wrapDivStart + body + wrapDivEnd + hydrateScript;
    res.set('Content-Type', 'text/html')
        .set('Access-Control-Allow-Origin', ' *')
        .send(result);
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

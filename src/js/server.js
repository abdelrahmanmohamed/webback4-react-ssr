/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

import HtmlApp from './components/register/views/html/app';
import BootstrapApp from './components/register/views/bootstrap/app';
import MaterialApp from './components/register/views/material/app';

const port = 3000;
const server = express();

const cors = require('cors');

server.use(express.json());
server.use(cors())
server.use(express.static('dist'));
server.use(express.static('images'));

server.get('/', (req, res) => {
    const wrapDivStart = `<div id="registerApp">`;
    const body = renderToString(<HtmlApp/>);
    const wrapDivEnd = `</div>`;
    const hydrateScript = `<script src="http://localhost:3000/registerHtmlClient.js"></script>`;
    const result = wrapDivStart + body + wrapDivEnd + hydrateScript;
    res.set('Content-Type', 'text/html')
        .set('Access-Control-Allow-Origin', ' *')
        .send(result);
});

server.get('/bootstrap', (req, res) => {
    const wrapDivStart = `<div id="registerApp">`;
    const body = renderToString(<BootstrapApp/>);
    const wrapDivEnd = `</div>`;
    const hydrateScript = `<script src="http://localhost:3000/registerBootstrapClient.js"></script>`;
    const result = wrapDivStart + body + wrapDivEnd + hydrateScript;
    res.set('Content-Type', 'text/html')
        .set('Access-Control-Allow-Origin', ' *')
        .send(result);
});

server.get('/material', (req, res) => {
    const wrapDivStart = `<div id="registerApp">`;
    const body = renderToString(<MaterialApp/>);
    const wrapDivEnd = `</div>`;
    const hydrateScript = `<script src="http://localhost:3000/registerMaterialClient.js"></script>`;
    const result = wrapDivStart + body + wrapDivEnd + hydrateScript;
    res.set('Content-Type', 'text/html')
        .set('Access-Control-Allow-Origin', ' *')
        .send(result);
});

function getApp(style) {
    if (style === 'Material') {
        return <MaterialApp/>;
    } else if (style === 'Bootstrap') {
        return <BootstrapApp/>;
    } else {
        return <HtmlApp/>;
    }
}

function normalizeStyleName(value) {
    value = value.toLowerCase();
    return value.charAt(0).toUpperCase() + value.slice(1);
}

server.get('/register', (req, res) => {
    const formStyle = req.body.style ? normalizeStyleName(req.body.style) : 'Html';
    // const formLang = req.body.lang;
    const wrapDivStart = `<div id="registerApp">`;
    const wrapDivEnd = `</div>`;
    let app = renderToString(getApp(formStyle));
    const body = wrapDivStart + app + wrapDivEnd;
    const result = {
        styleLink: [],
        scriptLink: ["http://localhost:3000/register" + formStyle + "Client.js"],
        body: body,
    }
    res.set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', ' *')
        .send(result);
});
server.listen(port);
console.log(`Serving at http://localhost:${port}`);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Api from './api';
import './index.css';

const apiVersion = 30;
const developmentServer = 'https://play.dhis2.org/dev';
// const developmentServer = 'https://41.70.35.25/dhis';

const rootElement = document.getElementById('root');

const withBaseUrl = baseUrl => {
    Api.setConfig({
        baseUrl: `${baseUrl}/api/${apiVersion}`,
    });

    ReactDOM.render( < App / > , rootElement);
};

withBaseUrl(developmentServer);
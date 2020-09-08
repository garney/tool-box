import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';

import App from './app';

// import './style/main.scss'
const init = () => {
    ReactDOM.render(
    <App env={{test:'test'}} />
        ,
        document.getElementById('root'));
};

init();

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}

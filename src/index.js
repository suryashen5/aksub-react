import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'

require("./api-mock");

ReactDOM.render( 
<BrowserRouter>
< App />
</BrowserRouter> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
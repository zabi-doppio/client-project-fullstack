import React from 'react';
import Reactdom from 'react-dom';
import App from './components/app.jsx';
import {BrowserRouter} from 'react-router-dom'
import '../node_modules/bootstrap/scss/bootstrap.scss'

Reactdom.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>

, document.getElementById("app"))
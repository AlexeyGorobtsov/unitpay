import React from 'react';
import {render} from 'react-dom';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux'
import {App} from './components/app.jsx';
import './styles.css';


render(
    <App/>,
    document.getElementById('root')
);
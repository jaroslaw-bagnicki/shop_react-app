import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { App } from './App';

const app = React.createElement(App);

ReactDOM.render(app, document.getElementById('root'));

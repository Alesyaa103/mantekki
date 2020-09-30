import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import './styles/common.scss';
import './styles/reset.scss';
import 'react-notifications/lib/notifications.css';

const target = document.getElementById('root');

ReactDOM.render(<Home />, target);
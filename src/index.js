import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styling.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import HomeManager from './containers/HomeManager'

ReactDOM.render(

    <HomeManager/>,

    document.getElementById('root')
);

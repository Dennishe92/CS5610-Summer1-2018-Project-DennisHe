import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styling.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import SearchManager from './containers/SearchManager'

ReactDOM.render(

    <SearchManager/>,

    document.getElementById('root')
);

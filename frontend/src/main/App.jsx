require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')
require('../template/custom.css')

import React from 'react';
import Menu from '../template/menu';
import Routes from './Routes.jsx';

export default props => (
    <div className="container">
        <Menu/>
        <Routes/>
    </div>
);
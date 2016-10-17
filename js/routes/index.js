import React from 'react';
import { Router, Route } from 'react-router';
import { hashHistory } from 'react-router';
import { fireAsyncActions } from 'react-async-actions';
import Transfers from './transfersView/index';
import MainBank from './transfersView/MainBank';
import Success from './transfersView/Success';
 
const getRoutes = () => {
    return (
        <Router history={hashHistory} >
            <Route path="/" component={MainBank} />
            <Route path="success" component={Success}/>
            <Route path="transfer" component={MainBank}/>
            <Route path="view" component={Transfers}/>
        </Router>
    );
};

module.exports = getRoutes;
/*import App from './app/App';*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { hashHistory } from 'react-router';

import Transfers from './transfersView/index';
import MainBank from './transfersView/MainBank';


const getRoutes = () => {
    return (
        <Router history={hashHistory} >
            <Route path="/" component={MainBank}>
                <Route path="scratch" component={Transfers}/>
                <Route path="transfer" component={MainBank}/>
                <Route path="view" component={Transfers}/>
            </Route>
        </Router>
    );
};

module.exports = getRoutes;
/*import App from './app/App';*/

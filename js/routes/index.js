import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRedirect} from 'react-router';

import Transfers from './transfersView/index';
import MainBank from './transfersView/MainBank';


const getRoutes = () => {
    return (
        <Route path="/" component={Transfers}>
            <Route path="transfers/view" component={MainBank}/>
        </Route>
    );
};

module.exports = getRoutes; 
/*import App from './app/App';*/

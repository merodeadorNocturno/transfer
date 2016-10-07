import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers from './reducers';
import getRoutes from './routes/';

//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

//console.log(getRoutes());

const store = createStore(reducers);
const appHistory = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        
            {getRoutes()}
        
    </Provider>,
    document.getElementById('app')
);
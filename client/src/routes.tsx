import React from 'react';
import { Switch, Route } from 'react-router';

import Sidebar from './components/sidebar';
import Overview from './components/overview';
import Documents from './components/documents';

const routes = (
    <React.Fragment>
        <Sidebar />
        <Switch>
            <Route path='/overview' component={Overview} />
            <Route path='/documents' component={Documents} />
        </Switch>
    </React.Fragment>
);

export default routes;

import React from 'react';
import { Switch, Route } from 'react-router';

import Nav from './components/nav';
import Dashboard from './components/dashboard';
import Documents from './components/documents';

const routes = (
    <React.Fragment>
        <Nav />
        <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/documents' component={Documents} />
        </Switch>
    </React.Fragment>
);

export default routes;

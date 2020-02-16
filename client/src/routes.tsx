import React from 'react';
import { Switch, Route } from 'react-router';

import Documents from './components/documents';

const routes = (
    <Switch>
        <Route path='/' component={Documents} />
    </Switch>
);

export default routes;

import React from 'react';
import { Switch, Route } from 'react-router';

import Documents from './components/documents';

const routes = (
    <Switch>
        <Route path='/documents' component={Documents} />
    </Switch>
);

export default routes;
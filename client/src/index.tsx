import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './redux/store';
import routes from './routes';
import GlobalStyle from './globalStyle';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>

        <GlobalStyle />
    </Provider>,
    document.getElementById('root')
);

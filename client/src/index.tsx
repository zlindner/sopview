import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createGlobalStyle } from 'styled-components';

import store, { history } from './store';
import routes from './routes';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    span {
        user-select: none;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    img {
        user-select: none;
    }
`;

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>

        <GlobalStyle />
    </Provider>,
    document.getElementById('root')
);

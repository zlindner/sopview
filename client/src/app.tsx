import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';

import store, { history } from './redux/store';
import routes from './routes';
import GlobalStyle from './globalStyle';

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>{routes}</ConnectedRouter>

            <GlobalStyle />
        </Provider>
    );
};

export default hot(App);

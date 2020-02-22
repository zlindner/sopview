import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';

import store, { persistor, history } from './redux/store';
import routes from './routes';
import GlobalStyle from './globalStyle';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ConnectedRouter history={history}>{routes}</ConnectedRouter>

                <GlobalStyle />
            </PersistGate>
        </Provider>
    );
};

export default hot(App);

import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

export const history = createBrowserHistory();

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer(history));

const middleware = [routerMiddleware(history), thunk];

//const store = createStore(rootReducer(history), {}, applyMiddleware(...middleware));

const store = createStore(persistedReducer, compose(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
export default store;

import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export const history = createBrowserHistory();

const middleware = [routerMiddleware(history), thunk];

const store = createStore(rootReducer(history), {}, applyMiddleware(...middleware));
export default store;

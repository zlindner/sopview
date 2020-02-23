import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import documents from '../reducers/documents';

const rootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        documents: documents
    });

export default rootReducer;

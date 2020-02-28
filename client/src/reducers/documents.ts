import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from '../actions/documents';
import Types from 'Sopview';

export type State = Readonly<{
    documents: Types.Document[];
}>;

export type Action = ActionType<typeof actions>;

const initialState: State = {
    documents: []
};

export default createReducer<State, Action>(initialState, {
    ADD_DOCUMENTS: (state, action) =>
        Object.assign({}, state, {
            documents: [...state.documents, ...action.payload]
        }),
    DELETE_DOCUMENT: (state, action) =>
        Object.assign({}, state, {
            documents: state.documents.filter(doc => doc !== action.payload)
        })
});

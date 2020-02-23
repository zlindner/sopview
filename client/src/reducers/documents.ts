import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from '../actions/documents';

export type State = Readonly<{
    documents: { filename: string; path: string }[];
}>;

export type Action = ActionType<typeof actions>;

const initialState: State = {
    documents: []
};

export default createReducer<State, Action>(initialState, {
    ADD_DOCUMENTS: (state, action) =>
        Object.assign({}, state, {
            documents: [...state.documents, ...action.payload]
        })
});

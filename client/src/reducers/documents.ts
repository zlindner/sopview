import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from '../actions/documents';

export type DocumentsState = Readonly<{
    renameOpen: boolean;
    deleteOpen: boolean;
}>;

export type DocumentsAction = ActionType<typeof actions>;

const initialState: DocumentsState = {
    renameOpen: false,
    deleteOpen: false
};

const documentsReducer = createReducer<DocumentsState, DocumentsAction>(initialState, {
    OPEN_RENAME: (state, _) => Object.assign({}, state, {
        renameOpen: true
    }),
    CLOSE_RENAME: (state, _) => Object.assign({}, state, {
        renameOpen: false
    }),
    OPEN_DELETE: (state, _) => Object.assign({}, state, {
        deleteOpen: true
    }),
    CLOSE_DELETE: (state, _) => Object.assign({}, state, {
        deleteOpen: false
    }),
});

export default documentsReducer;
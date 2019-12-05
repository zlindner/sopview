import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from '../actions/documents';

export type DocumentsState = Readonly<{
    renameOpen: boolean;
    deleteOpen: boolean;
    currentFile: string;
}>;

export type DocumentsAction = ActionType<typeof actions>;

const initialState: DocumentsState = {
    renameOpen: false,
    deleteOpen: false,
    currentFile: ''
};

const documentsReducer = createReducer<DocumentsState, DocumentsAction>(initialState, {
    OPEN_RENAME: (state, action) => Object.assign({}, state, {
        renameOpen: true,
        currentFile: action.payload
    }),
    CLOSE_RENAME: (state, _) => Object.assign({}, state, {
        renameOpen: false,
        currentFile: ''
    }),
    OPEN_DELETE: (state, action) => Object.assign({}, state, {
        deleteOpen: true,
        currentFile: action.payload
    }),
    CLOSE_DELETE: (state, _) => Object.assign({}, state, {
        deleteOpen: false,
        currentFile: ''
    }),
});

export default documentsReducer;
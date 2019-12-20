import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from '../actions/documents';

export type DocumentsState = Readonly<{
    currentDocument: string;
    viewerOpen: boolean;
    renameOpen: boolean;
    deleteOpen: boolean;

    uploadOpen: boolean;
    uploading: boolean;
    files: Array<File>;
}>;

export type DocumentsAction = ActionType<typeof actions>;

const initialState: DocumentsState = {
    currentDocument: '',
    viewerOpen: false,
    renameOpen: false,
    deleteOpen: false,

    uploadOpen: false,
    uploading: false,
    files: []
};

const documentsReducer = createReducer<DocumentsState, DocumentsAction>(initialState, {
    OPEN_VIEWER: (state, action) => Object.assign({}, state, {
        viewerOpen: true,
        currentDocument: action.payload
    }),
    CLOSE_VIEWER: (state, _) => Object.assign({}, state, {
        viewerOpen: false,
        currentDocument: ''
    }),
    OPEN_RENAME: (state, action) => Object.assign({}, state, {
        renameOpen: true,
        currentDocument: action.payload
    }),
    CLOSE_RENAME: (state, _) => Object.assign({}, state, {
        renameOpen: false,
        currentDocument: ''
    }),
    OPEN_DELETE: (state, action) => Object.assign({}, state, {
        deleteOpen: true,
        currentDocument: action.payload
    }),
    CLOSE_DELETE: (state, _) => Object.assign({}, state, {
        deleteOpen: false,
        currentDocument: ''
    }),
    OPEN_UPLOAD: (state, _) => Object.assign({}, state, {
        uploadOpen: true,
    }),
    CLOSE_UPLOAD: (state, _) => Object.assign({}, state, {
        uploadOpen: false,
    }),
    START_UPLOAD: (state, action) => Object.assign({}, state, {
        uploadOpen: false,
        uploading: true,
        files: action.payload
    }),
});

export default documentsReducer;
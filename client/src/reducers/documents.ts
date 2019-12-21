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
    uploadPercent: number;
}>;

export type DocumentsAction = ActionType<typeof actions>;

const initialState: DocumentsState = {
    currentDocument: '',
    viewerOpen: false,
    renameOpen: false,
    deleteOpen: false,

    uploadOpen: false,
    uploading: false,
    files: [],
    uploadPercent: 0
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
    UPLOAD_SUCCESS: (state, _) => Object.assign({}, state, {
        uploading: false,
        files: [],
        uploadPercent: 0
    }),
    UPLOAD_ERROR: (state, _) => Object.assign({}, state, {
        uploading: false,
        files: [],
        // error: true,
        uploadPercent: 0
    }),
    UPDATE_UPLOAD_PROGRESS: (state, action) => Object.assign({}, state, {
        uploadPercent: action.payload
    }),
});

export default documentsReducer;